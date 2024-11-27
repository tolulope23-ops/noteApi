// TODAY 9/10/2024
// USING database MongoDB, using ORM (mongoose)
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {errorHandlerMiddleware} = require('./middleware/errorHandler.js');
const app = express();

const connectDB = require("./db/config.js");
const noteRoutes = require("./routes/note.js");

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(errorHandlerMiddleware);
app.use("/api/v1/notes", noteRoutes);

const start = async () =>{
   try{ 
         await connectDB();
         app.listen(PORT,() => {    
        console.log(`Server is running on port ${PORT}`)});
}catch(error){
    console.log(error.messsage);
}
};
start();





