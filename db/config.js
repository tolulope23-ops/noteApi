const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASEURL;

const connectDB = async () => {
    try {
        if (!DATABASE_URL) {
            throw new Error("DATABASEURL is not defined");
        };

        console.log("Attempting database connection...");

        await mongoose.connect(DATABASE_URL);
        console.log("Database connected successfully");
        // console.log("Database:", connection.connection.name);
        // console.log("Host:", connection.connection.host);

    } catch (error) {
        console.error("MongoDB connection failed:");
        console.error(error.message);

        throw error;
    }
};

module.exports = connectDB;