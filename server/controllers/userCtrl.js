const Users = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const sendMail = require('./sendMail')
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const { CLIENT_URL , CLIENT_ID, CLIENT_SECRET} = process.env

const userCtrl = {
  register: async (req, res) => {
    try {
      console.log("register11111111");
      const { email, password, role, country } = req.body
      console.log(req.body)

      if (!country || !email || !password || !role)
        return res.status(400).json({ msg: "Please fill in all fields." })

      if (!validateEmail(email))
        return res.status(400).json({ msg: "Invalid emails." })

      const user = await Users.findOne({ email })
      if (user) return res.status(400).json({ msg: "This email already exists." })

      if (password.length < 6)
        return res.status(400).json({ msg: "Password must be at least 6 characters." })

      const passwordHash = await bcrypt.hash(password, 12)

      const newUser = new Users({
        email, password, country, role
      });

      await newUser.save();
      const activation_token = createActivationToken(newUser)

      const url = `${CLIENT_URL}/activate/${activation_token}`

      sendMail(email, url, "Verify your email address")

      res.json({ msg: "Register Success! Please activate your email to start." })

    } catch (err) 
    {
      return res.status(500).json({ msg: err.message })
    }
  },
  activateEmail: async (req, res) => {
    try {
      const { activation_token } = req.body
      const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET)
      //console.log(user)
      const { name, email, password } = user

      const check = await Users.findOne({ email })
      if (check) return res.status(400).json({ msg: "This email already exists." })

      const newUser = new Users({
        name, email, password
      })

      await newUser.save()

      res.json({ msg: "Account has been activated!" })

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
  },
  googleController: async (req, res) => {

    console.log("Google Login");
    console.log(req);
    const { idToken } = req.body;

    client
      .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
      .then(response => {
        // console.log('GOOGLE LOGIN RESPONSE',response)
        const { email_verified, name, email } = response.payload;
        if (email_verified) {
          User.findOne({ email }).exec((err, user) => {
            if (user) {
              const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '7d'
              });
              const { _id, email, name, role } = user;
              return res.json({
                token,
                user: { _id, email, name, role }
              });
            } else {
              let password = email + process.env.JWT_SECRET;
              user = new User({ name, email, password });
              user.save((err, data) => {
                if (err) {
                  console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
                  return res.status(400).json({
                    error: 'User signup failed with google'
                  });
                }
                const token = jwt.sign(
                  { _id: data._id },
                  process.env.JWT_SECRET,
                  { expiresIn: '7d' }
                );
                const { _id, email, name, role } = data;
                return res.json({
                  token,
                  user: { _id, email, name, role }
                });
              });
            }
          });
        } else {
          return res.status(400).json({
            error: 'Google login failed. Try again'
          });
        }
      });
  },
  facebookController: async (req, res) => {
    console.log('FACEBOOK LOGIN REQ BODY', req.body);
    const { userID, accessToken } = req.body;

    const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

    return (
      fetch(url, {
        method: 'GET'
      })
        .then(response => response.json())
        // .then(response => console.log(response))
        .then(response => {
          const { email, name } = response;
          User.findOne({ email }).exec((err, user) => {
            if (user) {
              const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
                expiresIn: '7d'
              });
              const { _id, email, name, role } = user;
              return res.json({
                token,
                user: { _id, email, name, role }
              });
            } else {
              let password = email + process.env.JWT_SECRET;
              user = new User({ name, email, password });
              user.save((err, data) => {
                if (err) {
                  console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err);
                  return res.status(400).json({
                    error: 'User signup failed with facebook'
                  });
                }
                const token = jwt.sign(
                  { _id: data._id },
                  process.env.JWT_SECRET,
                  { expiresIn: '7d' }
                );
                const { _id, email, name, role } = data;
                return res.json({
                  token,
                  user: { _id, email, name, role }
                });
              });
            }
          });
        })
        .catch(error => {
          res.json({
            error: 'Facebook login failed. Try later'
          });
        })
    );
  },
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '90m' })
}

const createAccessToken = (payload) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' })
}

const createRefreshToken = (payload) => {
  return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

module.exports = userCtrl