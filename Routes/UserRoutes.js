const express = require('express');
const UserController = require('../controllers/UserController');
const router = express.Router();
const cors = require("cors");
router.use(cors());


// Register (Sign-in)
router.post('/register', UserController.register);

// Login
router.post('/login', UserController.login);

// Get user by ID
router.get('/:id', UserController.getUserById);

// Update user by ID
router.put('/:id', UserController.updateUser);

// Delete user by ID
router.delete('/:id', UserController.deleteUser);

module.exports = router;
