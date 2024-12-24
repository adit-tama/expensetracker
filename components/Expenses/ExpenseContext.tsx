import { PutBlobResult } from "@vercel/blob";
import moment from "moment";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  BaseSyntheticEvent,
} from "react";
import { FieldErrors, useForm, UseFormRegister } from "react-hook-form";
import {
  expenseDeleteRequest,
  expenseGetRequest,
  expensePostRequest,
  uploadRequest,
} from "../../utils/client/requests";
import {
  ExpenseItemCardModel,
  ExpensePayloadModel,
} from "../../utils/data/models";
import { DbPayloadModel } from "../../utils/data/models/common";
import { transfromExpenseListDto } from "../../utils/data/transformers";
import { useDialogContext } from "../Layout/Dialog/DialogContext";

type ExpenseContext = {
  expenseList: Array<ExpenseItemCardModel>;
  isLoading: boolean;
  message: string;
  register: UseFormRegister<ExpensePayloadModel>;
  errors: FieldErrors<ExpensePayloadModel>;
  deleteMessage: string;
  previewFile: string;
  handleFileUpload: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => Promise<void>;
  handleSubmitForm: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>;
  handleDeleteExpenseItem: (
    value: DbPayloadModel & { imageUrl: string }
  ) => Promise<void>;
};

const ExpenseContext = createContext<ExpenseContext | undefined>(undefined);

export const generateFilename = (file: File) =>
  `${moment().format("DD-MM-YYYY")}${file.name.match(/\.([^.]+)$/)?.[0]}`;

export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [expenseList, setExpenseList] = useState<Array<ExpenseItemCardModel>>(
    []
  );
  const { isLoading, closeLoading, openLoading } = useDialogContext();
  const [message, setMessage] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ExpensePayloadModel>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [deleteMessage, setDeleteMessage] = useState("");
  const { closeModal } = useDialogContext();

  const resetFields = () => {
    setSelectedFile(null);
    setDeleteMessage("");
    setPreviewFile("");
    setMessage("");
  };

  const fetchData = async () => {
    openLoading();
    try {
      const { message, success, data } = await expenseGetRequest();

      if (!success) {
        setMessage(message);
      } else {
        setExpenseList(transfromExpenseListDto(data));
      }
    } catch (err: unknown) {
    } finally {
      closeLoading();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const fileData = event.target.files[0];

      setPreviewFile(URL.createObjectURL(fileData));
      setSelectedFile(fileData);
    }
  };

  const handleSubmitForm = handleSubmit(async (value) => {
    if (!selectedFile) return;

    openLoading();

    const filename = generateFilename(selectedFile);

    const uploadedBlob: PutBlobResult = await uploadRequest(
      selectedFile,
      filename
    );

    if (!uploadedBlob.url) {
      return;
    }

    const dataPayload = { ...value, image_url: uploadedBlob.url, filename };

    const response = await expensePostRequest(dataPayload);

    if (!response.success) {
      closeLoading();
      setMessage(response.message);
    }

    await fetchData();

    reset();
    resetFields();

    closeLoading();
    closeModal();
  });

  const handleDeleteExpenseItem = async (
    value: DbPayloadModel & { imageUrl: string }
  ) => {
    openLoading();
    const response = await expenseDeleteRequest({
      id: value.id,
      imageUrl: value.imageUrl,
    });

    if (!response.success) {
      setMessage(response.message);
    }

    await fetchData();

    closeLoading();
  };

  return (
    <ExpenseContext.Provider
      value={{
        expenseList,
        isLoading,
        message,
        register,
        errors,
        deleteMessage,
        previewFile,
        handleFileUpload,
        handleSubmitForm,
        handleDeleteExpenseItem,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpenseContext = (): ExpenseContext => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpenseContext must be used within a ExpenseProvider");
  }
  return context;
};
