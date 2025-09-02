const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
	try {
		const product = new Product(req.body);
		await product.save();
		res.status(201).json(product);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.getProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.getProductById = async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if (!product) return res.status(404).json({ message: 'Not found' });
		res.json(product);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!product) return res.status(404).json({ message: 'Not found' });
		res.json(product);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

exports.deleteProduct = async (req, res) => {
	try {
		const product = await Product.findByIdAndDelete(req.params.id);
		if (!product) return res.status(404).json({ message: 'Not found' });
		res.json({ message: 'Deleted' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
// ...existing code from old ProductController.js...
