const authController = {}

/*
POST /api/auth/signup
Auth: NA
Access: public
*/
authController.signup = async (req, res) => {
    res.json({controller: "signup"})
}

/*
POST /api/auth/login
Auth: NA
Access: public
*/
authController.login = async (req, res) => {
    res.json({controller: "login"})
}

/*
GET /api/auth/logout
Auth: user
Access: private
*/
authController.logout = async (req, res) => {
    res.json({controller: "logout"})
}

module.exports = authController