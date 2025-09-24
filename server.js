const express = require("express")
const dotenv = require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');
const listEndpoints = require("express-list-endpoints");




const UserRoutes = require("./Routes/UserRoutes");
const connectDB = require("./config/db");
const colors = require("colors")
//import express from "express"

const app = express();
app.use(cors());
connectDB()
const Port = process.env.PORT;
const jsonParser = bodyParser.json();
app.use(jsonParser);

app.use('/api', require('./Routes/UserRoutes'));

const ProductRoutes = require("./Routes/ProductRoutes");
app.use("/api/products", ProductRoutes);

console.log(listEndpoints(app));


// 404 handler
app.use((req, res, next) => {
	res.status(404).json({ message: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: 'Internal server error' });
});

app._router?.stack.forEach(r => {
	if (r.route && r.route.path) {
		console.log("Registered route:", r.route.path);
	}
});



const PORT = 5006;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));