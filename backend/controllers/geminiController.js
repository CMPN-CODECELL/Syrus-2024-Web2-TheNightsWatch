const { asyncErrorHandler, HttpError, askGemini } = require("../models/Model")


const askQuestion = asyncErrorHandler(async (req, res, next) => {
    const { question } = req.body;

    const result = await askGemini(question)
    if (!result) {
        throw new HttpError("Something went wrong", 500)
    }

    res.status(201).json({ response: result });
})


const getWeeklyWorkoutPlan = asyncErrorHandler(async (req, res, next) => {
    const { sex, age, weight, days, goal } = req.body;
    const prompt = "Generate me a weekly workout plan. I am a " + age + " year old" + sex + ". My weight is " + weight + "kgs. I can workout " + days + " days a week. My goal is " + goal;
    console.log(prompt)
    const result = await askGemini(prompt)
    if (!result) {
        throw new HttpError("Something went wrong", 500)
    }

    res.status(201).json({ response: result });
})

exports.askQuestion = askQuestion
exports.getWeeklyWorkoutPlan = getWeeklyWorkoutPlan