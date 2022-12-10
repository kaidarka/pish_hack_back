import express from "express";
import { StudentController } from "../controllers/index.js";
import {checkAuth} from "../utils/index.js";


const router = express.Router();

router.get('/students', StudentController.getAll);
router.get('/students/:id', StudentController.getOne);
router.post('/students', checkAuth, StudentController.create);
router.post('/students/:id', checkAuth, StudentController.update);

export default router;
