const express = require("express")
const messageController = require("../controllers/message.controller")
const route = express.Router()

route.route("/groups/:groupId").get(messageController.getGroupConversation)
route.route("/send/:receiverId").post(messageController.sendMessage)
route.route("/:receiverId").get(messageController.getConversation)

module.exports = route