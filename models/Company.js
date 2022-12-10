import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
	companyId: String,
	name: String,
	description: String,
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
}, {
	timestamps: true,
});

export default mongoose.model("Company", CompanySchema);
