const mongoose = require("mongoose")
const Schama = mongoose.Schema;

const reviewSchema = new Schama({
    comment: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author:{
        type: Schama.Types.ObjectId,
        ref: "User"
    }
})

const Review = mongoose.model("Review", reviewSchema)
module.exports = Review;