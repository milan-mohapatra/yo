const messageController = {}

/*
GET	/api/messages/groups/:groupId
Auth: group_member
Access: private
*/
messageController.getGroupConversation = async (req, res) => {
    res.json({controller: "getGroupConversation"})
}

/*
POST /api/messages/send/:receiverId
Auth: user or group_member
Access: private
*/
messageController.sendMessage = async (req, res) => {
    res.json({controller: "sendMessage"})
}

/*
GET /api/messages/:receiverId
Auth: yes
Access: private
*/
messageController.getConversation = async (req, res) => {
    res.json({controller: "getConversation"})
}

module.exports = messageController