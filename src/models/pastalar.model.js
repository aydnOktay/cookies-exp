const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PastalarSchema = new mongoose.Schema({
    pastalar_title: {
        type: String
    },
    pastalar_description: {
        type: [String]
    },
    pastalar_materials: {
        type: [String]
    },
    pastalar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Pastalar", PastalarSchema);