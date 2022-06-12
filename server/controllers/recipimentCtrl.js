const Recipiments = require('../models/recipimentModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')

const { CLIENT_URL } = process.env

const recipimentCtrl = {
  getRecipimentAllInfor: async (req, res) => {
    try {
      const all_transfer = await Recipiments.find();
      console.log("all_recipiment:::", all_transfer);
      res.json(all_transfer);
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body
      console.log(req.body)

      if (!name || !email || !password)
        return res.status(400).json({ msg: "Please fill in all fields." })

      if (!validateEmail(email))
        return res.status(400).json({ msg: "Invalid emails." })

      const user = await Users.findOne({ email })
      if (user) return res.status(400).json({ msg: "This email already exists." })

      if (password.length < 6)
        return res.status(400).json({ msg: "Password must be at least 6 characters." })

      const passwordHash = await bcrypt.hash(password, 12)
      console.log({ password, passwordHash });
      console.log("passwordHash", passwordHash);

      const newUser = {
        name, email, password: passwordHash
      }
      console.log(newUser)

      const activation_token = createActivationToken(newUser)
      console.log({ activation_token })
      console.log("success5");

      const url = `${CLIENT_URL}/activate/${activation_token}`

      sendMail(email, url, "Verify your email address")

      console.log("success5");

      res.json({ msg: "Register Success! Please activate your email to start." })

      console.log("success");
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body
      console.log(email, password)
      const user = await Users.findOne({ email })
      if (!user) return res.status(400).json({ msg: "This email does not exist." })

      const isMatch = await bcrypt.compare(password, user.password)
      if (!isMatch) return res.status(400).json({ msg: "Email or Password is incorrect." })

      const refresh_token = createRefreshToken({ id: user._id })
      res.cookie('refreshtoken', refresh_token, {
        httpOnly: true,
        path: '/user/refresh_token',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
      })

      res.json({ msg: "Login success!" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  getAccessToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken
      //console.log(rf_token)
      if (!rf_token) return res.status(400).json({ msg: "Please login now!" })

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(400).json({ msg: "Please login now!" })

        //console.log(user)
        const access_token = createAccessToken({ id: user.id })
        res.json({ access_token })
      })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body
      const user = await Users.findOne({ email })
      if (!user) return res.status(400).json({ msg: "This email does not exist." })

      const access_token = createAccessToken({ id: user._id })
      const url = `${CLIENT_URL}/user/reset/${access_token}`

      sendMail(email, url, "Reset your password")
      res.json({ msg: "Re-send the password, please check your email." })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { password } = req.body
      console.log(password)
      const passwordHash = await bcrypt.hash(password, 12)

      console.log(req.user)

      await Users.findOneAndUpdate({ _id: req.user.id }, {
        password: passwordHash
      })

      res.json({ msg: "Password successfully changed!" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  getUserInfor: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select('-password')

      res.json(user)
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  getUsersAllInfor: async (req, res) => {
    try {
      const users = await Users.find().select('-password')
      //console.log(req.user)
      res.json(users)
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie('refreshtoken', { path: '/user/refresh_token' })
      return res.json({ msg: "Logged out." })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  updateUser: async (req, res) => {
    try {
      const { name, avatar } = req.body
      await Users.findOneAndUpdate({ _id: req.user.id }, {
        name, avatar
      })

      res.json({ msg: "Update Success!" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  updateUsersRole: async (req, res) => {
    try {
      const { role } = req.body

      await Users.findOneAndUpdate({ _id: req.params.id }, {
        role
      })

      res.json({ msg: "Update Success!" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  },
  deleteUser: async (req, res) => {
    try {
      await Users.findByIdAndDelete(req.params.id)

      res.json({ msg: "Deleted Success!" })
    } catch (err) {
      return res.status(500).json({ msg: err.message })
    }
  }
}

module.exports = recipimentCtrl