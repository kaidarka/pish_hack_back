import express from "express";
import { CompanyController } from "../controllers/index.js";
import {checkAuth} from "../utils/index.js";


const router = express.Router();

router.get('/students', CompanyController.getAll);
router.get('/students/:id', CompanyController.getOne);
router.post('/students', checkAuth, CompanyController.create);
router.post('/students/:id', checkAuth, CompanyController.update);

export default router;
