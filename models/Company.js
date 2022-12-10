import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
	creator: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
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
	projects: {
		type: Array,
		default: [],
	},
	xp: Number,
	level: Number,
	viewsCount: {
		type: Number,
		default: 0,
	}
}, {
	timestamps: true,
});

export default mongoose.model("Company", CompanySchema);
