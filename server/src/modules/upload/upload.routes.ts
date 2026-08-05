import { Router } from "express";

import { authenticate }
from "../../middleware/auth.middleware";

import { upload }
from "../../middleware/upload.middleware";

import {
  uploadImage,
  uploadResume,
} from "./upload.controller";

const router = Router();

router.post(
  "/image",
  authenticate,
  upload.single("file"),
  uploadImage
);

router.post(
  "/resume",
  authenticate,
  upload.single("file"),
  uploadResume
);

export default router;