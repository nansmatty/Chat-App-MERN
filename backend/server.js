const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const app = express();

//middlewares
dotenv.config();

//DB Connection
connectDB();

const PORT = process.env.PORT || 5000;

// routes call
app.use("/api/user", userRoutes);

app.listen(
	PORT,
	console.log(
		`Server running on PORT ${PORT} 🔥🔥🔥🔥🔥`
	)
);
