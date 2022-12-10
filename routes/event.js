import express from "express";
import { EventController } from "../controllers/index.js";
import {checkAuth} from "../utils/index.js";


const router = express.Router();

router.get("/events", EventController.getAll);
router.get("/events/:id", EventController.getOne);
// TODO add validation
router.post("/posts", checkAuth, EventController.create);
router.patch("/posts/:id", checkAuth, EventController.update);
router.delete("/posts/:id", checkAuth, EventController.remove);

export default router;
