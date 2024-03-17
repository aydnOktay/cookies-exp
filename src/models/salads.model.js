const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SaladsSchema = new mongoose.Schema({
    salads_title: {
        type: String
    },
    salads_description: {
        type: [String]
    },
    salads_materials: {
        type: [String]
    },
    salads_photo: {
        type:String
    }
});

module.exports = mongoose.model("Salads", SaladsSchema);