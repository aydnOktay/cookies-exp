const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodsSchema = new mongoose.Schema({
    food_title: {
        type: String
    },
    food_description: {
        type: [String]
    },
    food_materials: {
        type: [String]
    },
    food_photo: {
        type:String
    }
});

module.exports = mongoose.model("Foods", FoodsSchema);