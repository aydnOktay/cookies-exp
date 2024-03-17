const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SerbetlitatlilarSchema = new mongoose.Schema({
    serbetlitatlilar_title: {
        type: String
    },
    serbetlitatlilar_description: {
        type: [String]
    },
    serbetlitatlilar_materials: {
        type: [String]
    },
    serbetlitatlilar_photo: {
        type:String
    }
});

module.exports = mongoose.model("Serbetlitatlilar", SerbetlitatlilarSchema);