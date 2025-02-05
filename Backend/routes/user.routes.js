const express = require("express");

const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First Name must be at least 3 chracters Long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  userController.resgisterUser
);

router.post('/login',[
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({min: 6}).withMessage('Password must be 6 characters long')
], userController.loginUser);

module.exports = router;
