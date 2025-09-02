const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Create product
router.post('/', async (req, res) => {
	try {
		const product = new Product(req.body);
		await product.save();
		res.status(201).json(product);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});

// Get all products
router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});

// Get product by ID
router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) return res.status(404).json({ message: 'Product not found' });
		res.json(product);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});

// Update product
router.put('/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!product) return res.status(404).json({ message: 'Product not found' });
		res.json(product);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});

// Delete product
router.delete('/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) return res.status(404).json({ message: 'Product not found' });
		res.json({ message: 'Product deleted' });
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
});

module.exports = router;
