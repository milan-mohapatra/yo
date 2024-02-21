const express = require("express")
const groupController = require("../controllers/group.controller")
const route = express.Router()

route.route("/create").post(groupController.createGroup)
route.route("/account/:groupId").get(groupController.getGroupInfo)
route.route("/update/:groupId").put(groupController.updateGroupInfo)
route.route("/delete/:groupId").delete(groupController.deleteGroup)
route.route("/:groupId/kick/:userId").put(groupController.kickMember)
route.route("/leave/:groupId").put(groupController.leaveGroup)

module.exports = route