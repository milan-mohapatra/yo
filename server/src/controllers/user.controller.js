const userController = {}

/*
GET /api/users/account
Auth: yes
Access: public
*/
userController.getUserInfo = async (req, res) => {
    res.json({controller: "getUserInfo"})
}

/*
PUT /api/users/update
Auth: yes
Access: private
*/
userController.updateUserInfo = async (req, res) => {
    res.json({controller: "updateUserInfo"})
}

/*
PUT /api/users/delete
Auth: yes
Access: private
*/
userController.deleteAccount = async (req, res) => {
    res.json({controller: "deleteAccount"})
}

/*
DELETE /api/admin/users/:userId
Auth: admin
Access: NA
*/
userController.deleteAUser = async (req, res) => {
    res.json({controller: "deleteAUser"})
}

module.exports = userController