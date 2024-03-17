const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KeklerSchema = new mongoose.Schema({
    kekler_title: {
        type: String
    },
    kekler_description: {
        type: [String]
    },
    kekler_materials: {
        type: [String]
    },
    kekler_photo: {
        type:String
    }
});

module.exports = mongoose.model("Kekler", KeklerSchema);