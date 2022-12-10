import express from "express";
import {loginValidation, registerValidation} from "../validations.js";
import {checkAuth, handleValidationErrors} from "../utils/index.js";
import { UserController } from "../controllers/index.js";

const router = express.Router();

router.post("/auth/login", loginValidation, handleValidationErrors, UserController.login);
router.post("/auth/register", registerValidation, handleValidationErrors, UserController.register);
router.get("/auth/me", checkAuth, UserController.getMe);

export default router;
