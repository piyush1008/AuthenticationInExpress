const express=require("express");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");


exports.authenticaton=async(req,res,next)=>{
    try{
        const {token}=req.cookies;
        if(!token)
        {
            return res.status(401).json({
                message:"please login first"
            })
        }
        const decoded=await jwt.verify(token,"SECRET");
        req.user=await User.findById(decoded._id);
        next();
    }
    catch(error)
    {
        res.status(400).json({error:error.message})
    }
}   

exports.hashPassword=(password)=>{
    return bcrypt.hash(password,10);
}

exports.matchPassword=(password,storedpassword)=>{
    return bcrypt.compare(password,storedpassword);
}