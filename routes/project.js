import express from "express";
import { ProjectController } from "../controllers/index.js";
import {checkAuth} from "../utils/index.js";


const router = express.Router();

router.get('/projects', ProjectController.getAll);
router.get('/projects/:id', ProjectController.getOne);
router.post('/projects', checkAuth, ProjectController.create);
router.post('/projects/:id', checkAuth, ProjectController.update);

export default router;
