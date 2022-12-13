const express = require('express');
const app = express();
require("express-async-errors")
const cors = require('cors');
const errorHandler = require('../middlewares/errorHandler');
// DOTENV enables our server reads our secret codes existing in oour .env file
require("dotenv").config();
app.use(express.json());
app.use(cors());
// Database
const connectDatabase = require("./config/dataBase");

// Middlewares
const Authentication = require('../middlewares/authentication');


// Router
const authenticationRouter = require("./router/authRoutes");
const termsConditionsRouter = require("./router/t-and-c-Routes");


app.use("/api/auth", authenticationRouter)
app.use("/api/terms", Authentication, termsConditionsRouter)

app.use(errorHandler);

const port = process.env.PORT || 5000

const startServer = () => {
    try {
        connectDatabase(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

startServer();