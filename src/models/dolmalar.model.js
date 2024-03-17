const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DolmalarSchema = new mongoose.Schema({
    dolmalar_title: {
        type: String
    },
    dolmalar_description: {
        type: [String]
    },
    dolmalar_materials: {
        type: [String]
    },
    dolmalar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Dolmalar", DolmalarSchema);