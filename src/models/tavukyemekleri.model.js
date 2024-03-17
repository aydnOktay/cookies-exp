const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TavukYemekleriSchema = new mongoose.Schema({
    tavukyemekleri_title: {
        type: String
    },
    tavukyemekleri_description: {
        type: [String]
    },
    tavukyemekleri_materials: {
        type: [String]
    },
    tavukyemekleri_photo: {
        type:String
    }
});

module.exports = mongoose.model("Tavukyemekleri", TavukYemekleriSchema);