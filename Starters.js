// Creating a server
// const express = require("express");
// const http = require("http");
// const server = http.createServer((request, response) =>{
//     response.writeHead(200,{'Content-Type' : 'text/plain'});
//     response.end("Thank for your patronage...");
// }).listen(8000,() =>{
//     console.log("There you are port 8000:");
// });

// // OR make your server listen for incoming request
// const port = 8000;
// server.listen(port,() =>{
//     console.log(`our Server is listening on port ${port}`);
// });

// TODAY 10/8/2024 Tuesday -- Create server using Express()

// METHODS IN BACKEND DEVELOPER(REST API)
// GET POST PUT DELETE PATCH
// GET:Retrieves resources from a server
// POST: To sent something to the server, i.e a data sent after signing up in a webapp
// PUT:To update all data that has existed before, with a new data
// DELETE: To delete a data in a server 
// PATCH: To update a specific data from a database, unlike put which reqires you to update the entire data,
// even if its only a data i want to update

// Tell our server to listen for a get request
const express = require("express");
const app = express();
app.get('/welcome', (req, res)=>{
    res.send("Software Developer");
});
const port = 3000;
app.listen(port,() => {
    console.log(`Server is running on port ${port}`);   
});

// Async and await
    // By default javascript is synchronous in nature: which means its run code line by line,
    // its wait for the output of one before running another,So we use async on a function 
    // to force declare that we dont it to wait for a function before running another.
    // While await is used in a function to make a request or a line of code to force wait for it output before running another