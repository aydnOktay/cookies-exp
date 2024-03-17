const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema  = new mongoose.Schema({
    fullName:{
        type:String
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    cart: {
        type: Array,
        default: []
    },
    cookies: {
        type: Array,
        default: []
    }
});

module.exports = mongoose.model("User",UserSchema);
