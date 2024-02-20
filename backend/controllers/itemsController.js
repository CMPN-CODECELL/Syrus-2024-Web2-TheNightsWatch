const { items, User, HttpError, asyncErrorHandler } = require("../models/Model")

const addItem = asyncErrorHandler(async (req, res, next) => {
    const { title, type, imageUrl, rarity } = req.body;

    const newItem = new items({
        title,
        type,
        imageUrl,
        rarity
    })
    const result = await newItem.save();
    if (!result) {
        throw new HttpError("adding item failed", 500)
    }
    res.json({ message: result });
})



// const getItemsByGoogleId = asyncErrorHandler(async (req, res, next) => {
//     const { googleId } = req.body;

//     const result = await forumChat.find({});
//     let arr = [];
//     result.forEach(element => {
//         arr.push(
//             element
//         )
//     });
//     res.json({ chats: arr })
// })


exports.addItem = addItem;
//exports.getItemsByGoogleId = getItemsByGoogleId