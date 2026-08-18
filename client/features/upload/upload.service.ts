import { api } from "@/lib/axios";

export const uploadImage = async (
  file: File
): Promise<string> => {
  const formData = new FormData();

  formData.append("file", file);

  const { data } = await api.post(
    "/uploads/image",
    formData
  );

  return data.data.url;
};

export const uploadResume = async (
  file: File
): Promise<string> => {
  const formData = new FormData();

  formData.append("file", file);

  const { data } = await api.post(
    "/uploads/resume",
    formData
  );

  return data.data.url;
};  