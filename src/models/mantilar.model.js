const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MantilarSchema = new mongoose.Schema({
    mantilar_title: {
        type: String
    },
    mantilar_description: {
        type: [String]
    },
    mantilar_materials: {
        type: [String]
    },
    mantilar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Mantilar", MantilarSchema);