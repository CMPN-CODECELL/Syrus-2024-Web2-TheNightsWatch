const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const customHabitController = require("../controllers/customHabitController")
const defaultHabitController = require("../controllers/defaultHabitController")

//user Routes
router.post("/users/addUser", userController.addUser);


//custom habit routes
router.post("/customHabit/addCustomHabit", customHabitController.addCustomHabit);

//default habit
router.post("/defaultHabit/addDefaultHabit", defaultHabitController.addDefaultHabit);
router.get("/defaultHabit/getAllDefaultHabits", defaultHabitController.getAllDefaultHabits);


module.exports = router;