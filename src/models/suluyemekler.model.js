const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SuluyemeklerSchema = new mongoose.Schema({
    suluyemekler_title: {
        type: String
    },
    suluyemekler_description: {
        type: [String]
    },
    suluyemekler_materials: {
        type: [String]
    },
    suluyemekler_photo: {
        type:String
    }
});

module.exports = mongoose.model("Suluyemekler", SuluyemeklerSchema);