import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
	university: String,
	education: String,
	course: String,
	skills: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "companyCard",
	},
	language: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "companyCard",
	},
	cv: String,
	tags: {
		type: Array,
		default: [],
	},
	projects: {
		type: Array,
		default: [],
	},
	xp: Number,
	level: Number,
	rewards: {
		type: Array,
		default: [],
	},
	progressTasks: {
		type: Array,
		default: [],
	},
	completeTasks: {
		type: Array,
		default: [],
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	fullName: {
		type: String,
		required: true
	}

}, {
	timestamps: true,
});

export default mongoose.model("Student", StudentSchema);
