const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DessertsSchema = new mongoose.Schema({
    desserts_title: {
        type: String
    },
    desserts_description: {
        type: [String]
    },
    desserts_materials: {
        type: [String]
    },
    desserts_photo: {
        type:String
    }
});

module.exports = mongoose.model("Desserts", DessertsSchema);