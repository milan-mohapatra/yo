const express = require("express")
const authController = require("../controllers/auth.controller")
const route = express.Router()

route.route("/signup").post(authController.signup)
route.route("/login").post(authController.login)
route.route("/logout").get(authController.logout)

module.exports = route