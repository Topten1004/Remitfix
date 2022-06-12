const mongoose = require('mongoose')


const transferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    phone: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    country: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    date: {
        type: Date,
        required: [true, "Please select your nationality"]
    },
    currency: {
        type: String,
    },
    status: {
        type: String,
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Transfers", transferSchema)