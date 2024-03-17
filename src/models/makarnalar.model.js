const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MakarnalarSchema = new mongoose.Schema({
    makarnalar_title: {
        type: String
    },
    makarnalar_description: {
        type: [String]
    },
    makarnalar_materials: {
        type: [String]
    },
    makarnalar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Makarnalar", MakarnalarSchema);