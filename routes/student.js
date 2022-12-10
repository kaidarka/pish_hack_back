import express from "express";
import { StudentController } from "../controllers/index.js";
import {checkAuth} from "../utils/index.js";


const router = express.Router();

router.post('/students', checkAuth, StudentController.create);

export default router;
