const express=require("express");
const {authenticaton} =require("../middleware/authentication")

const {login,register} =require("../controllers/User")
const router=express.Router();

router.route("/login").post(login)

router.route("/register").post(register)

module.exports=router;

