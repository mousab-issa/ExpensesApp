const express = require("express");
const Router = express.Router();
//routes
const {
  SignUp,
  LoginUser,
  ValidateToken,
} = require("../controllers/auth/AuthController");
// Validation
const { body } = require("express-validator");
//auth middleware
const authMiddleWare = require("../middlewares/auth");

// create user
Router.post(
  "/sign-up",
  [
    body("email")
      .isEmail()
      .withMessage("Please Enter A valid Email value")
      .normalizeEmail(),
    body("password")
      .isLength({
        min: 5,
      })
      .withMessage("The password has to be at least 8 charcter"),
    body("name")
      .isLength({
        min: 5,
      })
      .withMessage("The name has to be at least 8 charcter"),
    body("phone")
      .isLength({
        min: 5,
      })
      .withMessage("The phone has to be at least 8 charcter"),
  ],
  SignUp
);

// login
Router.post(
  "/sign-in",
  [
    body("email")
      .isEmail()
      .withMessage("Please Enter A valid Email value")
      .normalizeEmail(),
    body("password")
      .isLength({
        min: 5,
      })
      .withMessage("The password has to be at least 8 charcter"),
  ],
  LoginUser
);

// check token
Router.get(
  "/validate-token",
  authMiddleWare,
  ValidateToken
);

module.exports = Router;
