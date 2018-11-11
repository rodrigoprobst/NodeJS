const express = require('express');
const mongoose = require("mongoose");
const requireDir = require("require-dir");

const app = express();
app.use(express.json);

mongoose.connect('mongodb://localhost:27017/NodeJS', {
    useNewUrlParser: true
});

requireDir('./src/models');

app.use("/api", require("./src/routes"));

app.listen(3002);

console.log('Running on server :3002');


