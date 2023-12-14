const User=require("../models/User");
const jwt=require("jsonwebtoken");
const {generateToken} =require("../middleware/token")
const {hashPassword,matchPassword}=require("../middleware/authentication")

exports.login=async(req,res)=>{
    let {email,password}=req.body;
    console.log(req.body)
    const user=User.findOne({email}).select("+password");
    if(!user)
    {
        return res.status(400).json({
            success:false,
            message: "User does not exist"
        })
    }

    const isMatch=await matchPassword(password,storedpassword);
    if(!isMatch)
    {
        return res.status(400).json({
            success:false,
            message: "incorrect password"
        })
    }
    const token = generateToken(user._id)
    const options={
        expires:new Date(Date.now()+90*24*60*60*1000),
        httpOnly:true
    }
    res.status(201).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
}


exports.register=async(req,res)=>{
    let {email,password}=req.body;
    console.log(req.body)
    console.log("sdfasdf")
    let user=await User.findOne({email}).limit(1);
    if(user)
    {
        return res.status(400).json({
            success:false,
            message:"user already exist"
        })
    }
   password=await hashPassword(password);
   console.log(password);
     user= await User.create({email,password});
    const token = generateToken(user._id)
    console.log(user);
    const options={
        expires:new Date(Date.now()+90*24*60*60*1000),
        httpOnly:true
    }
    res.status(201).cookie("token",token,options).json({
        success:true,
        user,
        token
    })
}