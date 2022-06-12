const mongoose = require('mongoose')
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    country: {
        type: String
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    status: {
        type: String,
    },
    googleId:{
        type: Number,
        default: 0
    },
    secret:{
        type:String
    }
}, {
    timestamps: true
})
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

module.exports = mongoose.model("Users", userSchema)