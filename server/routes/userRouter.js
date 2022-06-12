const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const transferCtrl = require('../controllers/transferCtrl')
const auth = require('../middleware/auth')
const authAdmin = require('../middleware/authAdmin')
const recipimentCtrl = require('../controllers/recipimentCtrl')
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

router.post('/register', userCtrl.register)

router.post('/activation', userCtrl.activateEmail)

router.post('/login', userCtrl.login)

router.post('/refresh_token', userCtrl.getAccessToken)

router.post('/forgot', userCtrl.forgotPassword)

router.post('/reset', auth, userCtrl.resetPassword)

router.get('/infor', auth, userCtrl.getUserInfor)

router.get('/all_infor', auth, authAdmin, userCtrl.getUsersAllInfor)

router.get('/logout', userCtrl.logout)

router.patch('/update', auth, userCtrl.updateUser)

router.patch('/update_role/:id', auth, authAdmin, userCtrl.updateUsersRole)

router.delete('/delete/:id', auth, authAdmin, userCtrl.deleteUser)

//---------------------------- FaceBook, Google Login
router.get('/googlelogin', userCtrl.googleController)

router.post('/facebooklogin', userCtrl.facebookController)

// ---------------------------  Transfer Router  ---------------------------------------

router.get('/trans_infor', transferCtrl.getTransfersAllInfor);

// ---------------------------- Recipiment Router  -------------------------------------

router.get('/recip_info', recipimentCtrl.getRecipimentAllInfor);

router.get("/auth/google", passport.authenticate("google", { scope: ["profile"] })
);
router.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
  function(req, res) {
      console.log(res);
    // Successful authentication, redirect secrets.
    res.redirect("http://localhost:3000");
  }
);
router.get("/logout", function(req, res){
    res.redirect("http://localhost:3000/");
  });
module.exports = router