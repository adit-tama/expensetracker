import { useForm } from "react-hook-form";
import { ExpensePayloadModel } from "../../utils/data/models";
import { useState } from "react";
import moment from "moment";
import { PutBlobResult } from "@vercel/blob";
import { useDialogContext } from "../Layout/Dialog/DialogContext";
import { expensePostRequest, uploadRequest } from "../../utils/client/requests";

export const generateFilename = (file: File) =>
  `${moment().format("DD-MM-YYYY")}${file.name.match(/\.([^.]+)$/)?.[0]}`;

const useExpenseForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ExpensePayloadModel>();

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { closeModal } = useDialogContext();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const fileData = event.target.files[0];

      setPreviewFile(URL.createObjectURL(fileData));
      setSelectedFile(fileData);
    }
  };

  const onSubmit = handleSubmit(async (value) => {
    if (!selectedFile) return;

    setIsLoading(true);

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
      setIsLoading(false);
      setMessage(response.message);
    }

    setIsLoading(false);
    closeModal();
  });

  return {
    register,
    onSubmit,
    errors,
    message,
    isLoading,
    previewFile,
    handleFileUpload,
  };
};

export default useExpenseForm;
