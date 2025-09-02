const express = require ("express")
const dotenv = require ("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

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

app.use("/api/user", UserRoutes);

const ProductRoutes = require("./Routes/ProductRoutes");
app.use("/api/products", ProductRoutes);


// 404 handler
app.use((req, res, next) => {
	res.status(404).json({ message: 'Route not found' });
});

// General error handler
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).json({ message: 'Internal server error' });
});

app.listen(Port, () => console.log(`server running on port ${Port}`));