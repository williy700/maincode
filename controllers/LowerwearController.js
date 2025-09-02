const Lowerwear = require('../models/Lowerwear');

exports.createLowerwear = async (req, res) => {
	try {
		const lowerwear = new Lowerwear(req.body);
		await lowerwear.save();
		res.status(201).json(lowerwear);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.getLowerwears = async (req, res) => {
	try {
		const lowerwears = await Lowerwear.find();
		res.json(lowerwears);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.getLowerwearById = async (req, res) => {
	try {
		const lowerwear = await Lowerwear.findById(req.params.id);
		if (!lowerwear) return res.status(404).json({ message: 'Not found' });
		res.json(lowerwear);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.updateLowerwear = async (req, res) => {
	try {
		const lowerwear = await Lowerwear.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!lowerwear) return res.status(404).json({ message: 'Not found' });
		res.json(lowerwear);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.deleteLowerwear = async (req, res) => {
	try {
		const lowerwear = await Lowerwear.findByIdAndDelete(req.params.id);
		if (!lowerwear) return res.status(404).json({ message: 'Not found' });
		res.json({ message: 'Deleted' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
// ...existing code from old LowerwearController.js...
