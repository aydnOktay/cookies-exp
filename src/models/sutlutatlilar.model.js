const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SutlutatlilarSchema = new mongoose.Schema({
    sutlutatlilar_title: {
        type: String
    },
    sutlutatlilar_description: {
        type: [String]
    },
    sutlutatlilar_materials: {
        type: [String]
    },
    sutlutatlilar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Sutlutatlilar", SutlutatlilarSchema);