const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PilavlarSchema = new mongoose.Schema({
    pilavlar_title: {
        type: String
    },
    pilavlar_description: {
        type: [String]
    },
    pilavlar_materials: {
        type: [String]
    },
    pilavlar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Pilavlar", PilavlarSchema);