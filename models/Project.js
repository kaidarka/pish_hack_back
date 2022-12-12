import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
	status: String,
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	tags: {
		type: Array,
		default: [],
	},
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
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
