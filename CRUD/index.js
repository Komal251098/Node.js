const express = require("express");
const connectMongoDb = require("./connection");
const logReqRes = require("./src/Middlewares/Middlewares");

const userRouter = require("./src/routes/user");

const app = express();
const PORT = 8000;

// connection from connection file
connectMongoDb("mongodb://127.0.0.1:27017/demo-1");

// Middleware to parse JSON
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt")); // middleware from middleware file

// Router from routes file
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log("Start Server!"));
