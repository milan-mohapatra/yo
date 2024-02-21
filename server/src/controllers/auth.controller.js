const authController = {}

/*
POST /api/auth/signup
Auth: no
Access: public
*/
authController.signup = async (req, res) => {
    res.json({controller: "signup"})
}

/*
POST /api/auth/login
Auth: no
Access: public
*/
authController.login = async (req, res) => {
    res.json({controller: "login"})
}

/*
GET /api/auth/logout
Auth: yes
Access: private
*/
authController.logout = async (req, res) => {
    res.json({controller: "logout"})
}

module.exports = authController