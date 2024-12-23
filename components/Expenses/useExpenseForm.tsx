import { useForm } from "react-hook-form";
import { AuthPayloadModel } from "../../utils/data/models";
import { useState } from "react";
import moment from "moment";
import { PutBlobResult } from "@vercel/blob";
import { useModalContext } from "../Layout/Dialog/DialogContext";
import { expensePostRequest, uploadRequest } from "../../utils/client/requests";

export const generateFilename = (file: File) =>
  `${moment().format("DD-MM-YYYY")}${file.name.match(/\.([^.]+)$/)?.[0]}`;

const useExpenseForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<AuthPayloadModel>();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewFile, setPreviewFile] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { closeModal } = useModalContext();

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files && event.target.files[0]) {
      const fileData = event.target.files[0];

      setPreviewFile(URL.createObjectURL(fileData));
      setSelectedFile(fileData);
    }
  };

  const onSubmit = async (value) => {
    if (!selectedFile) return;

    setIsLoading(true);

    const uploadedBlob: PutBlobResult = await uploadRequest(
      selectedFile,
      generateFilename(selectedFile)
    );

    if (!uploadedBlob.url) {
      return;
    }

    const response = await expensePostRequest(value);

    if (!response.success) {
      setIsLoading(false);
      setMessage(response.message);
    }

    setIsLoading(false);
    closeModal();
  };

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
