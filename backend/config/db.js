const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(
			process.env.MONGODB_URI
		);

		console.log(
			`MongoDB Connected: ${conn.connection.host}`
				.cyan.underline
		);
	} catch (err) {
		console.log(
			`Error Message: ${err.message}`.red.bold
		);
		process.exit();
	}
};

module.exports = connectDB;
