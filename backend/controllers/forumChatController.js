const { forumChat, User, HttpError, asyncErrorHandler } = require("../models/Model")

const addChat = asyncErrorHandler(async (req, res, next) => {
    const { googleId, text } = req.body;
    const user = await User.findOne({
        googleId: googleId
    })
    if (!user) {
        throw new HttpError("user does not exists", 404)
    }
    const newChat = new forumChat({
        googleId,
        text
    })
    const result = await newChat.save();
    if (!result) {
        throw new HttpError("adding chat failed", 500)
    }
    res.json({ message: result });
})

const getAllChats = asyncErrorHandler(async (req, res, next) => {
    const result = await forumChat.find();
    let arr = [];
    result.forEach(element => {
        arr.push(
            element
        )
    });
    res.json({ chats: arr })
})


exports.addChat = addChat;
exports.getAllChats = getAllChats