const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KurabiyelerSchema = new mongoose.Schema({
    kurabiyeler_title: {
        type: String
    },
    kurabiyeler_description: {
        type: [String]
    },
    kurabiyeler_materials: {
        type: [String]
    },
    kurabiyeler_photo: {
        type:String
    }
});

module.exports = mongoose.model("Kurabiyeler", KurabiyelerSchema);