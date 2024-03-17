const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const koftelerSchema = new mongoose.Schema({
    kofteler_title: {
        type: String
    },
    kofteler_description: {
        type: [String]
    },
    kofteler_materials: {
        type: [String]
    },
    kofteler_photo: {
        type:String
    }
});

module.exports = mongoose.model("kofteler", koftelerSchema);