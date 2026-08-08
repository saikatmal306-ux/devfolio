import { api } from "@/lib/axios";

export const uploadImage = async (
  file: File
) => {
  const formData = new FormData();

  formData.append(
    "file",
    file
  );

  const { data } =
    await api.post(
      "/uploads/image",
      formData
    );

  return data;
};