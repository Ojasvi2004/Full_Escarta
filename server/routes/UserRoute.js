const express= require("express");
const router= express.Router();

const { RegisterUser, LoginUser ,adminLogin}=require("../controllers/UserController");
const adminAUTH = require("../middlewares/adminAUTH");


router.post("/register",RegisterUser);
router.post("/login",LoginUser);
router.post("/admin",adminLogin);

module.exports=router;