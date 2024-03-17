const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BakliyatlarSchema = new mongoose.Schema({
    bakliyatlar_title: {
        type: String
    },
    bakliyatlar_description: {
        type: [String]
    },
    bakliyatlar_materials: {
        type: [String]
    },
    bakliyatlar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Bakliyatlar", BakliyatlarSchema);