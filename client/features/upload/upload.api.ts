import { useMutation }
from "@tanstack/react-query";

import { uploadImage, uploadResume, }
from "./upload.service";

export const useUploadImage =
  () =>
    useMutation({
      mutationFn: uploadImage,
    });

    export const useUploadResume =
  () =>
    useMutation({
      mutationFn: uploadResume,
    });