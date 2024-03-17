const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CorbalarSchema = new mongoose.Schema({
    corbalar_title: {
        type: String
    },
    corbalar_description: {
        type: [String]
    },
    corbalar_materials: {
        type: [String]
    },
    corbalar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Corbalar", CorbalarSchema);