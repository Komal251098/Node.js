const express = require("express");
const connectMongoDb = require("./connection");
const urlRoute = require("./src/routes/urlRouter");

const app = express();
const PORT = 8001;

// connection from connection file
connectMongoDb("mongodb://127.0.0.1:27017/short-url");

// Middleware to parse JSON
app.use(express.urlencoded({ extended: false }));

// Router from routes file
app.use("/url", urlRoute);

app.listen(PORT, () => console.log("Start Server!"));
