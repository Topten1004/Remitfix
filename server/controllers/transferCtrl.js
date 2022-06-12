const Transfers = require('../models/transferModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {CLIENT_URL} = process.env

const transferCtrl = {
    getTransfersAllInfor: async (req, res) => {
        try {
            const all_transfer = await Transfers.find();
            console.log("all_transfer:::", all_transfer);
            res.json(all_transfer);
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = transferCtrl