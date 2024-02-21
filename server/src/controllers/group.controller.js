const groupController = {}

/*
POST /api/groups
Auth: user.admin
Access: NA
*/
groupController.createGroup = async (req, res) => {
    res.json({controller: "createGroup"})
}

/*
GET /api/groups/account
Auth: user.member
Access: private
*/
groupController.getGroupInfo = async (req, res) => {
    res.json({controller: "getGroupInfo"})
}

/*
PUT /api/groups
Auth: user.admin
Access: private
*/
groupController.updateGroupInfo = async (req, res) => {
    res.json({controller: "updateGroupInfo"})
}

/*
DELETE /api/groups
Auth: user.admin
Access: private
*/
groupController.deleteGroup = async (req, res) => {
    res.json({controller: "deleteGroup"})
}

/*
PUT /api/groups/kick/userId
Auth: user.admin
Access: private
*/
groupController.kickUser = async (req, res) => {
    res.json({controller: "kickUser"})
}

/*
PUT /api/groups/kick/userId
Auth: user.admin
Access: private
*/
groupController.kickUser = async (req, res) => {
    res.json({controller: "kickUser"})
}

/*
PUT /api/groups/leave/:groupId
Auth: user.member
Access: private
*/
groupController.leaveGroup = async (req, res) => {
    res.json({controller: "leaveGroup"})
}

/*
DELETE /api/admin/groups/:groupId
Auth: admin
Access: NA
*/
groupController.deleteAGroup = async (req, res) => {
    res.json({controller: "deleteAGroup"})
}

module.exports = groupController