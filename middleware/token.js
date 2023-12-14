const jwt=require("jsonwebtoken");

exports.generateToken=(id)=>{
    return jwt.sign({_id:id},"SECRET");
}