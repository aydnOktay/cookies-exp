const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalatalarSchema = new mongoose.Schema({
    salatalar_title: {
        type: String
    },
    salatalar_description: {
        type: [String]
    },
    salatalar_materials: {
        type: [String]
    },
    salatalar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Salatalar", SalatalarSchema);