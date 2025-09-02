const Topwear = require('../models/Topwear');

exports.createTopwear = async (req, res) => {
	try {
		const topwear = new Topwear(req.body);
		await topwear.save();
		res.status(201).json(topwear);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.getTopwears = async (req, res) => {
	try {
		const topwears = await Topwear.find();
		res.json(topwears);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.getTopwearById = async (req, res) => {
	try {
		const topwear = await Topwear.findById(req.params.id);
		if (!topwear) return res.status(404).json({ message: 'Not found' });
		res.json(topwear);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.updateTopwear = async (req, res) => {
	try {
		const topwear = await Topwear.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!topwear) return res.status(404).json({ message: 'Not found' });
		res.json(topwear);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.deleteTopwear = async (req, res) => {
	try {
		const topwear = await Topwear.findByIdAndDelete(req.params.id);
		if (!topwear) return res.status(404).json({ message: 'Not found' });
		res.json({ message: 'Deleted' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
// ...existing code from old TopwearController.js...
