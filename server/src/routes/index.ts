import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes";
import profileRoutes from "../modules/profile/profile.routes";
import projectRoutes from "../modules/project/project.routes";
import experienceRoutes from "../modules/experience/experience.routes";
import educationRoutes from "../modules/education/education.routes";
import uploadRoutes from "../modules/upload/upload.routes";

const router = Router();

router.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "DevFolio API is healthy",
  });
});

router.use("/auth", authRoutes);

router.use("/profile", profileRoutes);

router.use("/projects", projectRoutes);

router.use( "/experiences", experienceRoutes);

router.use("/education", educationRoutes);

router.use( "/uploads", uploadRoutes);

export default router;