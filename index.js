import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";

import { checkAuth,  } from "./utils/index.js";
import router from "./routes/index.js";

mongoose
	.connect("mongodb+srv://admin:admin@cluster0.pbjgpo9.mongodb.net/blog?retryWrites=true&w=majority")
	.then(() => console.log("DB ok"))
	.catch((err) => console.log("DB error", err));

const app = express();

const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, "uploads");
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname);
	},
});

const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));



app.post("/upload", checkAuth, upload.single("image"), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	});
});
app.use(router);


app.listen(4444, (err) => {
	if (err) {
		return console.log(err);
	}

	console.log("Server OK");
});
