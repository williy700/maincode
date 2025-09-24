const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register a new user
// exports.register = async (req, res) => {
// 	try {
// 		const { email, password, ...rest } = req.body;
// 		const existingUser = await User.findOne({ email });
// 		    if (!username || !email || !password) {
//       return res.status(400).json({ message: "All fields are required" });
//     }
// 		if (existingUser) return res.status(400).json({ message: 'User already exists' });
// 		const hashedPassword = await bcrypt.hash(password, 10);
// 		const user = new User({ email, password: hashedPassword, ...rest });
// 		await user.save();
// 		res.status(201).json(user);
// 	} catch (err) {
// 		res.status(400).json({ error: err.message });
// 	}
// };



exports.register = async (req, res) => {
	try {
		const { username, email, password, phone } = req.body;

		if (!username || !email || !password || !phone) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const user = new User({ username, email, phone, password: hashedPassword });
		await user.save();

		res.status(201).json({ message: "User registered successfully", user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};


// Login user
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ message: 'Invalid credentials' });
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ message: 'Invalid password' });
		const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
		res.json({ message: 'Login successful', token, user });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
// ...existing code from old UserController.js...
// Get user by ID
exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) return res.status(404).json({ message: 'User not found' });
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
};

// Update user by ID
exports.updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
		if (!user) return res.status(404).json({ message: 'User not found' });
		res.json(user);
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
};

// Delete user by ID
exports.deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) return res.status(404).json({ message: 'User not found' });
		res.json({ message: 'User deleted' });
	} catch (err) {
		res.status(500).json({ message: 'Server error' });
	}
};
