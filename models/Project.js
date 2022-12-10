import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
	status: String,
	name: String,
	description: String,
	tags: {
		type: Array,
		default: [],
	},
	creatorId: Number,
	skills: {
		type: Array,
		default: [],
	},
	companies: {
		type: Array,
		default: [],
	},
	students: {
		type: Array,
		default: [],
	},
}, {
	timestamps: true,
});

export default mongoose.model("Project", ProjectSchema);
