const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BaliklarSchema = new mongoose.Schema({
    baliklar_title: {
        type: String
    },
    baliklar_description: {
        type: [String]
    },
    baliklar_materials: {
        type: [String]
    },
    baliklar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Baliklar", BaliklarSchema);