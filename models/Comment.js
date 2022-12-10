import mongoose from "mongoose";
// TODO delete
const CommentSchema = new mongoose.Schema({
	message: {
		type: String,
		required: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	postId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post",
		required: true,
	}
},{
	timestamps: true,
});

export default mongoose.model("Comment", CommentSchema);
