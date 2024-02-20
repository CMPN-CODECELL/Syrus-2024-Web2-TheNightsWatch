const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: { type: String, required: true },
    name: { type: String, required: true },
    mailId: { type: String, required: true }

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



exports.User = User
exports.customHabit = customHabit
exports.defaultHabit = defaultHabit
exports.HttpError = HttpError
exports.asyncErrorHandler = asyncErrorHandler
