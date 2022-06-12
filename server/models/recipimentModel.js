const mongoose = require('mongoose')

const recipimentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    service: {
        type: String,
        required: [true, "Please enter your service!"],
        trim: true,
        unique: true
    },
    country: {
        type: String,
        required: [true, "Please enter your country!"]
    },
    date: {
        type: Date
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Recipiments", recipimentSchema)