const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CommentsSchema = new mongoose.Schema({
    comment: {
        type:String
    }
});

module.exports = mongoose.model("Comments",CommentsSchema);