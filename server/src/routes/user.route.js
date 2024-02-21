const express = require("express")
const userController = require("../controllers/user.controller")
const route = express.Router()

route.route("/").get(userController.getContacts)
route.route("/account").get(userController.getUserInfo)
route.route("/update").put(userController.updateUserInfo)
route.route("/delete").put(userController.deleteAccount)

module.exports = route