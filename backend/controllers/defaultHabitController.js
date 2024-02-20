const { defaultHabit, HttpError, asyncErrorHandler, User, defaultHabitEntry } = require("../models/Model")

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

//not tested
const makeDefaultHabitEntry = asyncErrorHandler(async (req, res, next) => {
    const { googleId, habitId, quantity } = req.body;

    const user = await User.findOne({ googleId: googleId });
    if (!user) {
        throw new HttpError("googleId has error", 500)

    }
    // const tempDefaultHabit = await defaultHabit.findOne({ _id: habitId })
    // const title = tempDefaultHabit.title
    // const unit = tempDefaultHabit.unit
    // console.log(unit)
    let result;
    const entry = await defaultHabitEntry.findOne({
        habitId: habitId,
        googleId: googleId
    });
    console.log(entry)
    if (entry) {
        entry.quantity = quantity
        result = await entry.save();
    } else {
        console.log("here")
        // const newEntry = new defaultHabitEntry({
        //     googleId,
        //     habitId,
        //     quantity,
        //     title,
        //     unit
        // })
        // result = await newEntry.save()
    }

    if (!result) {
        throw new HttpError("adding default habit entry failed", 500)
    }
    res.json({ message: result })
})


const getAllDefaultHabitsEntry = asyncErrorHandler(async (req, res, next) => {
    const result = await defaultHabitEntry.find({ googleId: "root" });
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
exports.makeDefaultHabitEntry = makeDefaultHabitEntry
exports.getAllDefaultHabitsEntry = getAllDefaultHabitsEntry