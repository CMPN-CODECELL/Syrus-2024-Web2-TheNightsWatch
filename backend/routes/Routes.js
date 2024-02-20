const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")

//user Routes
router.post("/users/addUser", userController.addUser);

module.exports = router;
