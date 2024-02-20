const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: { type: String, required: true },
    name: { type: String, required: true },
    mailId: { type: String, required: true },
    itemList: [{ type: mongoose.Schema.Types.Mixed, required: false }],
    workoutPlan: { type: String, required: true, default: false },

})
const User = mongoose.model('User', userSchema)


const customHabitSchema = new Schema({
    title: { type: String, required: true },
    difficulty: { type: Number, required: true },
    //user_id: { type: mongoose.Types.ObjectId, required: true },
    daily: { type: Boolean, required: true }
})

const customHabit = mongoose.model('customHabit', customHabitSchema)



const defaultHabitSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    unit: { type: String, required: true },
})

const defaultHabit = mongoose.model('defaultHabit', defaultHabitSchema)


const defaultHabitEntrySchema = new Schema({
    googleId: { type: String, required: true },
    habitId: { type: mongoose.Types.ObjectId, required: true },
    quantity: { type: Number, required: true },
    title: { type: String, required: true },
    unit: { type: String, required: true },
})

const defaultHabitEntry = mongoose.model('defaultHabitEntry', defaultHabitEntrySchema)

const forumChatSchema = new Schema({
    googleId: { type: String, required: true },
    text: { type: String, required: true },
    timeStamp: { type: Date, required: true, default: Date.now }
})

const forumChat = mongoose.model('forumChat', forumChatSchema)

const itemsSchema = new Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    rarity: { type: String, required: true },
    imageUrl: { type: String, required: true },
})

const items = mongoose.model('items', itemsSchema)


class HttpError extends Error {
    constructor(message, errorCode) {
        super(message);
        this.code = errorCode;
    }
}

const asyncErrorHandler = (func) => {
    return (req, res, next) => {
        func(req, res, next).catch(err => next(err));
    }
}


// 1. Configuration
const api_key = 'AIzaSyADJNXPFcAxBiYSCMyCIyb534isnzBWYu0';
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = { temperature: 0.9, topP: 1, topK: 1, maxOutputTokens: 4096 };

// 2. Initialise Model
const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig });

async function askGemini(question) {
    try {
        const prompt = question
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        return text
    } catch (error) {
        console.error('Error generating content:', error);
    }
}


exports.User = User
exports.customHabit = customHabit
exports.defaultHabit = defaultHabit
exports.defaultHabitEntry = defaultHabitEntry
exports.forumChat = forumChat
exports.items = items
exports.askGemini = askGemini
exports.HttpError = HttpError
exports.asyncErrorHandler = asyncErrorHandler
