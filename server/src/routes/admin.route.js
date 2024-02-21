const express = require("express")
const userController = require("../controllers/user.controller.js")
const groupController = require("../controllers/group.controller.js")
const chartController = require("../controllers/chart.controller.js")
const route = express.Router()

route.route("/users/:userId").delete(userController.deleteAUser)
route.route("/groups/:groupId").delete(groupController.deleteAGroup)
route.route("/charts").get(chartController.getEntries)

module.exports = route