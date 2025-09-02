const NewOutfit = require('../models/NewOutfit');

exports.createNewOutfit = async (req, res) => {
	try {
		const newOutfit = new NewOutfit(req.body);
		await newOutfit.save();
		res.status(201).json(newOutfit);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.getNewOutfits = async (req, res) => {
	try {
		const newOutfits = await NewOutfit.find();
		res.json(newOutfits);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.getNewOutfitById = async (req, res) => {
	try {
		const newOutfit = await NewOutfit.findById(req.params.id);
		if (!newOutfit) return res.status(404).json({ message: 'Not found' });
		res.json(newOutfit);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.updateNewOutfit = async (req, res) => {
	try {
		const newOutfit = await NewOutfit.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!newOutfit) return res.status(404).json({ message: 'Not found' });
		res.json(newOutfit);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.deleteNewOutfit = async (req, res) => {
	try {
		const newOutfit = await NewOutfit.findByIdAndDelete(req.params.id);
		if (!newOutfit) return res.status(404).json({ message: 'Not found' });
		res.json({ message: 'Deleted' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
// ...existing code from old NewOutfitController.js...
