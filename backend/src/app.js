const express = require("express");
const app = express();
const questions = require("./routes/questions");


app.use(express.json());
app.use("/api/questions", questions);


module.exports = app;
