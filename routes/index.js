import express from "express";
import authRouter from "./auth.js";
import studentRouter from "./student.js";
import companyRouter from "./company.js";
import projectRouter from "./project.js";

const router = express.Router();

router.use(authRouter);
router.use(studentRouter);
router.use(companyRouter);
router.use(projectRouter);

export default router;
