import CompanyModel from '../models/Company.js';

const getParams = (params) => {
	let condition = {};
	if (params.companyId) {
		condition.companyId = params.companyId;
	}
	if (params.tags) {
		condition.tags = { $all: params.tags.split(',')};
	}
	return condition;
}

export const getAll = async (req,res) => {
	try {
		const params = getParams(req.query)
		const students = await CompanyModel.find(params).exec();
		res.json(students);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить компании",
		});
	}
}


export const getOne = async (req,res) => {
	try {
		const companyId = req.params.id;

		CompanyModel.findOneAndUpdate({
			_id: companyId,
		}, {
			$inc: { viewsCount: 1 },
		}, {
			returnDocument: "after",
		}, (err, doc) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					message: "Не удалось получить компанию",
				});
			}

			if (!doc) {
				return res.status(404).json({
					message: "Компания не найдена",
				});
			}
			res.json(doc);
		}).populate("user");
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось получить компанию",
		});
	}
}
export const create = async (req,res) => {
	try {
		const doc = new CompanyModel({
			creator: req.userId,
			name: req.body.name,
			description: req.body.description,
			tags: req.body.tags,
			projects: req.body.projects,
		});

		const post = await doc.save();

		res.json(post);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Не удалось создать компанию",
		});
	}
}

export const update = async (req,res) => {
	try {
		const companyId = req.params.id;

		await CompanyModel.updateOne(
			{
				_id: companyId,
			},
			{
				name: req.body.name,
				description: req.body.description,
				tags: req.body.tags,
				projects: req.body.projects,
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
