const { asyncErrorHandler, HttpError, askGemini, User } = require("../models/Model")


const askQuestion = asyncErrorHandler(async (req, res, next) => {
    const { question } = req.body;

    const result = await askGemini(question)
    if (!result) {
        throw new HttpError("Something went wrong", 500)
    }

    res.json({ response: result });
})

const ifUserHasWorkOutPlan = asyncErrorHandler(async (req, res, next) => {
    const { googleId } = req.body;

    const user = await User.findOne({ googleId: googleId })
    if (!user) {
        throw new HttpError("User not found", 404)
    }
    if (user.workoutPlan) {
        res.json({ plan: user.workoutPlan });

    }

    res.json({ plan: "" });
})


const getWeeklyWorkoutPlan = asyncErrorHandler(async (req, res, next) => {
    const { sex, age, weight, days, goal, googleId } = req.body;
    const prompt = "Generate me a weekly workout plan. I am a " + age + " year old" + sex + ". My weight is " + weight + "kgs. I can workout " + days + " days a week. My goal is " + goal;
    console.log(prompt)
    const result = await askGemini(prompt)
    if (!result) {
        throw new HttpError("Something went wrong", 500)
    }
    // const user = await User.findOne({ googleId: googleId })
    // if (!user) {
    //     throw new HttpError("User not found", 404)
    // }
    // user.workoutPlan = result;
    // const temp = await User.save();
    res.json({ response: result });
})


exports.askQuestion = askQuestion
exports.getWeeklyWorkoutPlan = getWeeklyWorkoutPlan
exports.ifUserHasWorkOutPlan = ifUserHasWorkOutPlan