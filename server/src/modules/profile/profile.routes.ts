import { Router } from "express";

import { authenticate } from "../../middleware/auth.middleware";

import { create, me, update, getByUsername } from "./profile.controller";

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
  "/me",
  authenticate,
  update
);

router.get(
  "/:username",
  getByUsername
);

export default router;