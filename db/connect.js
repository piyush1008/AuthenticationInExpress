const mongoose=require("mongoose");

exports.connectDatabase=()=>{
    console.log("sdfsadf")
    mongoose.connect("mongodb+srv://piyush:piyush@cluster0.3zshpjx.mongodb.net/?retryWrites=true&w=majority")
    .then(con=> console.log(`Database connected`))
    .catch(err=> console.log(err));
}
