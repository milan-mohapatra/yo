const express = require("express")
const authController = require("../controllers/auth.controller.js")
const route = express.Router()

route.route("/signup", authController.signup)
route.route("/login", authController.login)
route.route("/logout", authController.logout)

module.exports = route