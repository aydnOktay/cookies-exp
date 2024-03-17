const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EtYemekleriSchema = new mongoose.Schema({
    etyemekleri_title: {
        type: String
    },
    etyemekleri_description: {
        type: [String]
    },
    etyemekleri_materials: {
        type: [String]
    },
    etyemekleri_photo: {
        type:String
    }
});

module.exports = mongoose.model("Etyemekleri", EtYemekleriSchema);