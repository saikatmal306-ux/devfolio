import { Router }
from "express";

import {
  getPortfolio,
} from "./portfolio.controller";

const router = Router();

router.get(
  "/:username",
  getPortfolio
);

export default router;