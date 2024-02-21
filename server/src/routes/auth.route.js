const express = require("express")
const authController = require("../controllers/auth.controller.js")
const { authenticateUser } = require("../middlewares/auth.middleware.js")
const route = express.Router()

route.route("/signup").post(authController.signup)
route.route("/login").post(authController.login)
route.route("/logout").get(authenticateUser, authController.logout)

module.exports = route