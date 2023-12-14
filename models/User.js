const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

const userSchema=mongoose.Schema({
    email:{
        type: String,
        required:[true,"please enter a name"]
    },
    password:{
        type:String,
        required:[true, "please enter a password"],
        minlength:[6,"Password must be at least 6 characters"]
    }
})

module.exports=mongoose.model("User",userSchema);