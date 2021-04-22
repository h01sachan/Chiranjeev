//import all required packages here
const express = require("express");
const router = express.Router();

//helper function
const checkemail=require('../helpers/checkemail');

//middleware for protected routes
const isAuth=require('../Middleware/isAuth');

//importing controllers 
const individualAuthController = require("../Controllers/individualAuth");

//route for authentication
router.post("/signup",individualAuthController.signup);

module.exports = router;