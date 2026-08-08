import { useMutation }
from "@tanstack/react-query";

import { uploadImage }
from "./upload.service";

export const useUploadImage =
  () =>
    useMutation({
      mutationFn: uploadImage,
    });