import { Router } from "express";

import { authenticate }
from "../../middleware/auth.middleware";

import {
  create,
  getMine,
  update,
  remove,
} from "./education.controller";

const router = Router();

router.post(
  "/",
  authenticate,
  create
);

router.get(
  "/",
  authenticate,
  getMine
);

router.patch(
  "/:id",
  authenticate,
  update
);

router.delete(
  "/:id",
  authenticate,
  remove
);

export default router;