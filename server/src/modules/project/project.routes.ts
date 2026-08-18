import { Router } from "express";

import { authenticate }
from "../../middleware/auth.middleware";

import {
  create,
  getMine,
  getOne,
  update,
  remove,
  getByUsername,
} from "./project.controller";

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

router.get(
  "/user/:username",
  getByUsername
);  

router.get(
  "/:id",
  authenticate,
  getOne
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