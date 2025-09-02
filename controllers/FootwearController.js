const Footwear = require('../models/Footwear');

// Create new footwear
exports.createFootwear = async (req, res) => {
	try {
		const footwear = new Footwear(req.body);
		await footwear.save();
		res.status(201).json(footwear);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Get all footwears
exports.getFootwears = async (req, res) => {
	try {
		const footwears = await Footwear.find();
		res.json(footwears);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Get footwear by ID
exports.getFootwearById = async (req, res) => {
	try {
		const footwear = await Footwear.findById(req.params.id);
		if (!footwear) return res.status(404).json({ message: 'Not found' });
		res.json(footwear);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Update footwear
exports.updateFootwear = async (req, res) => {
	try {
		const footwear = await Footwear.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!footwear) return res.status(404).json({ message: 'Not found' });
		res.json(footwear);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete footwear
exports.deleteFootwear = async (req, res) => {
	try {
		const footwear = await Footwear.findByIdAndDelete(req.params.id);
		if (!footwear) return res.status(404).json({ message: 'Not found' });
		res.json({ message: 'Deleted' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
