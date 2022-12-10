import express from "express";
import commentRouter from "./comment.js";
import postRouter from "./post.js";
import authRouter from "./auth.js";
import tagRouter from "./tag.js";
import eventRouter from "./event.js";
import studentRouter from "./student.js";
import companyRouter from "./company.js";

const router = express.Router();

router.use(commentRouter);
router.use(postRouter);
router.use(authRouter);
router.use(tagRouter);
router.use(eventRouter);
router.use(studentRouter)
router.use(companyRouter)

export default router;
