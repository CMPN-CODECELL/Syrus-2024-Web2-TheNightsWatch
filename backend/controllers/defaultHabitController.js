const { defaultHabit, HttpError, asyncErrorHandler } = require("../models/Model")

const addDefaultHabit = asyncErrorHandler(async (req, res, next) => {
    const { title, description, unit, quantity } = req.body;

    const newDefaultHabit = new defaultHabit({
        title,
        description,
        unit,
        quantity
    })
    const result = await newDefaultHabit.save();
    if (!result) {
        throw new HttpError("adding default habit failed", 500)
    }
    res.json({ message: "default habit created successfully." });
})


const getAllDefaultHabits = asyncErrorHandler(async (req, res, next) => {
    const result = await defaultHabit.find();
    let arr = [];
    result.forEach(element => {
        arr.push(
            element
        )
    });
    res.json({ habits: arr })
})

exports.getAllDefaultHabits = getAllDefaultHabits
exports.addDefaultHabit = addDefaultHabit;