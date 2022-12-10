import StudentModel from '../models/Student.js';
import UserModel from "../models/User.js";

const getParams = (params) => {
	let condition = {};
	if (params.university) {
		condition.university = params.university;
	}
	if (params.skills) {
		condition.skills = { $all: params.skills.split(',')};
	}
	return condition;
}

export const getAll = async (req,res) => {
	try {
		const params = getParams(req.query)
		const students = await StudentModel.find(params).exec();
		res.json(students);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить студентов",
		});
	}
}


export const getOne = async (req,res) => {
	try {
		const studentId = req.params.id;

		StudentModel.findOneAndUpdate({
			_id: studentId,
		}, {
			$inc: { viewsCount: 1 },
		}, {
			returnDocument: "after",
		}, (err, doc) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: "Не удалось получить студента",
				});
			}

			if (!doc) {
				return res.status(404).json({
					message: "Студент не найден",
				});
			}
			res.json(doc);
		}).populate("user");
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить студента",
		});
	}
}
export const create = async (req,res) => {
	try {
		const student = await StudentModel.find({user: req.userId});
		if (student) {
			res.status(500).json({
				message: "Студент уже существует",
			});
		} else {
			const user = await UserModel.findById(req.userId);
			const doc = new StudentModel({
				university: req.body.university,
				education: req.body.education,
				course: req.body.course,
				skills: req.body.skills,
				language: req.body.language,
				cv: req.body.cv,
				tags: req.body.tags,
				user: req.userId,
				fullName: user.fullName,
			});

			const post = await doc.save();

			res.json(post);
		}

	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось создать статью",
		});
	}
}

export const update = async (req,res) => {
	try {
		const studentId = req.params.id;

		await StudentModel.updateOne(
			{
				_id: studentId,
			},
			{
				university: req.body.university,
				education: req.body.education,
				course: req.body.course,
				skills: req.body.skills,
				language: req.body.language,
				cv: req.body.cv,
				tags: req.body.tags,
			},
		);

		res.json({
			success: true
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось обновить студента"
		});
	}
}
