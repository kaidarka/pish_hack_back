import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
	name: String,
	description: String,
	logoUrl: String,
	xp: Number,
	reward: String,
}, {
	timestamps: true,
});

export default mongoose.model("Task", TaskSchema);
