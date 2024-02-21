const messageController = {}

/*
GET /api/messages/groups/:groupId
Auth: user.member
Access: private
*/
groupController.getGroupConversation = async (req, res) => {
    res.json({controller: "getGroupConversation"})
}

/*
POST /api/messages/send/:receiverId
Auth: user
Access: private
*/
groupController.sendMessage = async (req, res) => {
    res.json({controller: "sendMessage"})
}

/*
GET /api/messages/:receiverId
Auth: user
Access: private
*/
groupController.getConversation = async (req, res) => {
    res.json({controller: "getConversation"})
}

module.exports = messageController