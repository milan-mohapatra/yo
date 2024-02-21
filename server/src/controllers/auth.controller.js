const _ = require("lodash");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model.js");
const { CustomError } = require("../utils/errors.util.js");

const authController = {};

/*
POST /api/auth/signup
Auth: no
Access: public
*/
authController.signup = async (req, res, next) => {
  // write validation
  const body = _.pick(req.body, ["name", "email", "password", "avatar"]);
  try {
    const user = new User(body);

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;

    await user.save();

    // handel socket: send new users to contacts

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      }
    );

    res.status(201).json({ token });
  } catch (err) {
    next(CustomError(err.message));
  }
};

/*
POST /api/auth/login
Auth: no
Access: public
*/
authController.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(new CustomError("invalid email or password", 404));
    }

    const checkValidPassword = await bcrypt.compare(password, user.password);
    if (!checkValidPassword) {
      return next(new CustomError("invalid email or password", 404));
    }

    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "10d",
      }
    );
    res.json({ token });
  } catch (err) {
    next(CustomError(err.message));
  }
};

/*
GET /api/auth/logout
Auth: yes
Access: private
*/
authController.logout = async (req, res, next) => {
  res.json({token: ""});
};

module.exports = authController;
