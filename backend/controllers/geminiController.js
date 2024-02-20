const { asyncErrorHandler, HttpError, askGemini } = require("../models/Model")


const askQuestion = asyncErrorHandler(async (req, res, next) => {
    const { question } = req.body;

    const result = await askGemini(question)
    if (!result) {
        throw new HttpError("Something went wrong", 500)
    }

    res.status(201).json({ response: result });
})


exports.askQuestion = askQuestion