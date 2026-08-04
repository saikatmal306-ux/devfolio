import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { create, me, update } from "./profile.controller";

const router = Router();

router.post(
  "/",
  authenticate,
  create
);

router.get(
  "/me",
  authenticate,
  me
);

router.patch(
  "/",
  authenticate,
  update
);

export default router;