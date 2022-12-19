const express = require("express")
const router = express.Router();
const {
    createTC
} = require("../controllers/t-and-c-Controller");

router.post("/", createTC);

module.exports = router