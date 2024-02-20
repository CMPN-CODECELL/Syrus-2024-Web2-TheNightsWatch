const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: { type: String, required: true },
    name: { type: String, required: true },
    mailId: { type: String, required: true }

})
const User = mongoose.model('User', userSchema)


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
exports.HttpError = HttpError
exports.asyncErrorHandler = asyncErrorHandler
