import { Router } from "express";

import { register, login, me, logout } from "./auth.controller";
import { authenticate } from "../../middleware/auth.middleware";

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.get(
  "/me",
  authenticate,
  me
);

// Logout must be callable with an expired or otherwise invalid token so the
// browser can always receive the cookie-clearing response.
router.post("/logout", logout);

export default router;
