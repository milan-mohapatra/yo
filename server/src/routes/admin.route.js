const express = require("express")
const userController = require("../controllers/user.controller")
const groupController = require("../controllers/group.controller")
const chartController = require("../controllers/chart.controller")
const route = express.Router()

route.route("/users/:userId").delete(userController.deleteAUser)
route.route("/groups/:groupId").delete(groupController.deleteAGroup)
route.route("/charts").get(chartController.getEntries)

module.exports = route