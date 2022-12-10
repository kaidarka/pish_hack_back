import express from "express";
import authRouter from "./auth.js";
import studentRouter from "./student.js";
import companyRouter from "./company.js";

const router = express.Router();

router.use(authRouter);
router.use(studentRouter)
router.use(companyRouter)

export default router;
