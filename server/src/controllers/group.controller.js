const groupController = {}

/*
POST /api/groups/create
Auth: yes
Access: NA
*/
groupController.createGroup = async (req, res) => {
    res.json({controller: "createGroup"})
}

/*
GET	/api/groups/account/:groupId
Auth: group_member
Access: NA
*/
groupController.getGroupInfo = async (req, res) => {
    res.json({controller: "getGroupInfo"})
}

/*
PUT	/api/groups/update/:groupId
Auth: group_admin
Access: NA
*/
groupController.updateGroupInfo = async (req, res) => {
    res.json({controller: "updateGroupInfo"})
}

/*
DELETE	/api/groups/delete/:groupId
Auth: group_admin
Access: NA
*/
groupController.deleteGroup = async (req, res) => {
    res.json({controller: "deleteGroup"})
}

/*
PUT /api/groups/:groupId/kick/:userId
Auth: group_admin
Access: NA
*/
groupController.kickMember = async (req, res) => {
    res.json({controller: "kickMember"})
}

/*
PUT /api/groups/leave/:groupId
Auth: group_admin
Access: NA
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