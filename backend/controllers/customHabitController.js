const { User, customHabit, HttpError, asyncErrorHandler } = require("../models/Model")

const addCustomHabit = asyncErrorHandler(async (req, res, next) => {
    const { title, daily, difficulty, googleId } = req.body;
    const user = await User.findOne({
        googleId: googleId
    })
    console.log(req.body)
    let userId = await user._id;
    userId = (String)(userId)
    console.log(typeof (userId))
    const newCustomHabit = new customHabit({
        title,
        difficulty,
        //userId,
        daily

    })
    console.log(newCustomHabit)
    const result = await newCustomHabit.save();
    if (!result) {
        throw new HttpError("adding custom habit failed", 500)
    }
    res.json({ message: "customHabit created successfully." });
})

exports.addCustomHabit = addCustomHabit;