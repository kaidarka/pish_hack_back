import ProjectModel from '../models/Project.js';

const getParams = (params) => {
	let condition = {};
	// if (params.companyId) {
	// 	condition.companyId = params.companyId;
	// }
	// if (params.tags) {
	// 	condition.tags = { $all: params.tags.split(',')};
	// }
	return condition;
}

export const getAll = async (req,res) => {
	try {
		const params = getParams(req.query)
		const students = await ProjectModel.find(params).exec();
		res.json(students);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить проекты",
		});
	}
}


export const getOne = async (req,res) => {
	try {
		const projectId = req.params.id;

		ProjectModel.findOneAndUpdate({
			_id: projectId,
		}, {
			$inc: { viewsCount: 1 },
		}, {
			returnDocument: "after",
		}, (err, doc) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: "Не удалось получить проект",
				});
			}

			if (!doc) {
				return res.status(404).json({
					message: "Проект не найден",
				});
			}
			res.json(doc);
		}).populate("user");
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить проект",
		});
	}
}
export const create = async (req,res) => {
	try {
		const doc = new ProjectModel({
			creator: req.userId,
			status: 'new',
			name: req.body.name,
			description: req.body.description,
			tags: req.body.tags,
			skills: req.body.skills,
		});

		const post = await doc.save();

		res.json(post);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось создать проект",
		});
	}
}

export const update = async (req,res) => {
	try {
		const projectId = req.params.id;

		await ProjectModel.updateOne(
			{
				_id: projectId,
			},
			{
				name: req.body.name,
				description: req.body.description,
				tags: req.body.tags,
				skills: req.body.skills,
			},
		);

		res.json({
			success: true
		});
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось обновить проект"
		});
	}
}
