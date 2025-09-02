const express = require('express');
const Lowerwear = require('../models/Lowerwear');
const router = express.Router();

// Create
router.post('/', async (req, res) => {
	try {
		const item = new Lowerwear(req.body);
		await item.save();
		res.status(201).json(item);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});
// Read all
router.get('/', async (req, res) => {
	try {
		const items = await Lowerwear.find();
		res.json(items);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});
// Read by id
router.get('/:id', async (req, res) => {
	try {
		const item = await Lowerwear.findById(req.params.id);
		if (!item) return res.status(404).json({ message: 'Not found' });
		res.json(item);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});
// Update
router.put('/:id', async (req, res) => {
	try {
		const item = await Lowerwear.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!item) return res.status(404).json({ message: 'Not found' });
		res.json(item);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});
// Delete
router.delete('/:id', async (req, res) => {
	try {
		const item = await Lowerwear.findByIdAndDelete(req.params.id);
		if (!item) return res.status(404).json({ message: 'Not found' });
		res.json({ message: 'Deleted' });
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});

module.exports = router;
