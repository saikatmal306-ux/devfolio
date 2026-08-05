import { UploadApiResponse }
from "cloudinary";

import { Readable }
from "stream";

import cloudinary
from "../../config/cloudinary";

export const uploadFile =
  async (
    file: Express.Multer.File,
    folder: string
  ) => {
    return new Promise<
      UploadApiResponse
    >((resolve, reject) => {
      const stream =
        cloudinary.uploader.upload_stream(
          {
            folder,
            resource_type: "auto",
          },
          (
            error,
            result
          ) => {
            if (error) {
              reject(error);
              return;
            }

            resolve(
              result as UploadApiResponse
            );
          }
        );

      Readable.from(
        file.buffer
      ).pipe(stream);
    });
  };