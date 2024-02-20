const { User, HttpError, asyncErrorHandler } = require("../models/Model")

const addUser = asyncErrorHandler(async (req, res, next) => {
    const { googleId, name, mailId } = req.body;
    const user = await User.findOne({
        googleId: googleId
    })
    if (user) {
        throw new HttpError("user already exists", 409)
    }
    const newUser = new User({
        googleId,
        name,
        mailId
    })
    const result = await newUser.save();
    if (!result) {
        throw new HttpError("adding user failed", 500)
    }
    res.json({ message: "User created successfully." });
})

exports.addUser = addUser;