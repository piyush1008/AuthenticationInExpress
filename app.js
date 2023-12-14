const express=require("express");
const app=express();
const {connectDatabase}=require("./db/connect")
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser");


//using middlewar
//this middleware is used to make req.body works
//app.use(express.json());


// parse application/json
 app.use(bodyParser.json())
//this middleware is used to get form datat
// app.use(express.urlencoded({extended:true}));

// //this middleware is used to make the cookie work req.cookie
app.use(cookieParser());



connectDatabase();
// app.use("/api/route");

app.get("/",(req,res)=>{
    res.send("hello world");
})


const user=require("./routes/User")
app.use("/api/v1",user)

app.listen(8000,()=>{
    console.log("listening from port 8000");
})

