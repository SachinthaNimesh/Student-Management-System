const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const pool = require("./db/mysqlDB");

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Routes
const userRoutes = require("../models/user");
app.use("/api", userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;

