const mongoose = require("mongoose");

DATABASE_URI = process.env.DATABASEURI;
const connectDB = async() =>{
    try{
        await mongoose.connect(DATABASE_URI);
        console.log("Database connected");  
    }
    catch(error){
        console.log(error.messsage);
    }
};

module.exports = connectDB;