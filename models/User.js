import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	passwordHash: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		required: true,
	},
	studentCardId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "studentCard",
	},
	companyCardId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "companyCard",
	},
	avatarUrl: String,
}, {
	timestamps: true,
});

export default mongoose.model("User", UserSchema);
