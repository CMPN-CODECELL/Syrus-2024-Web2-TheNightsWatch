const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const customHabitController = require("../controllers/customHabitController")
const defaultHabitController = require("../controllers/defaultHabitController")
const geminiController = require("../controllers/geminiController")
const forumChat = require('../controllers/forumChatController')
//user Routes
router.post("/users/addUser", userController.addUser);


//custom habit routes
router.post("/customHabit/addCustomHabit", customHabitController.addCustomHabit);

//default habit
router.post("/defaultHabit/addDefaultHabit", defaultHabitController.addDefaultHabit);
router.get("/defaultHabit/getAllDefaultHabits", defaultHabitController.getAllDefaultHabits);
router.post("/defaultHabit/makeDefaultHabitEntry", defaultHabitController.makeDefaultHabitEntry);

//gemini routes
router.post("/gemini/askQuestion", geminiController.askQuestion);
router.post("/gemini/getWeeklyWorkoutPlan", geminiController.getWeeklyWorkoutPlan);

//chatforum routes
router.post("/forumChat/addChat", forumChat.addChat);
router.get("/forumChat/getAllChats", forumChat.getAllChats);


module.exports = router;
