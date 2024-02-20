const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController")
const customHabitController = require("../controllers/customHabitController")
const defaultHabitController = require("../controllers/defaultHabitController")
const geminiController = require("../controllers/geminiController")
const forumChatController = require('../controllers/forumChatController')
const itemsController = require('../controllers/itemsController')
//user Routes
router.post("/users/addUser", userController.addUser);


//custom habit routes
router.post("/customHabit/addCustomHabit", customHabitController.addCustomHabit);

//default habit
router.post("/defaultHabit/addDefaultHabit", defaultHabitController.addDefaultHabit);
router.get("/defaultHabit/getAllDefaultHabits", defaultHabitController.getAllDefaultHabits);
router.post("/defaultHabit/makeDefaultHabitEntry", defaultHabitController.makeDefaultHabitEntry);
router.post("/defaultHabit/getAllDefaultHabitsEntry", defaultHabitController.getAllDefaultHabitsEntry);

//gemini routes
router.post("/gemini/askQuestion", geminiController.askQuestion);
router.post("/gemini/getWeeklyWorkoutPlan", geminiController.getWeeklyWorkoutPlan);
router.post("/gemini/ifUserHasWorkOutPlan", geminiController.ifUserHasWorkOutPlan);

//chatforum routes
router.post("/forumChat/addChat", forumChatController.addChat);
router.get("/forumChat/getAllChats", forumChatController.getAllChats);

//items routes
router.post("/items/addItem", itemsController.addItem);


module.exports = router;
