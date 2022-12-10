import StudentModel from '../models/Student.js';
import UserModel from "../models/User.js";

export const create = async (req,res) => {
	try {
		const user = await UserModel.findById(req.userId);
		const doc = new StudentModel({
			university: req.body.university,
			education: req.body.education,
			course: req.body.course,
			skills: req.body.skills,
			language: req.body.language,
			cv: req.body.cv,
			tags: req.body.tags,
			userId: req.userId,
			fullName: user.fullName,
		});

		const post = await doc.save();

		res.json(post);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось создать статью",
		});
	}
}
