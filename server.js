if(process.env.NODE_ENV !=="production"){
    require("dotenv").config()
}

const express =require("express")
const {engine}=require("express-handlebars")
const mongoose=require("mongoose")
const mybrary=require("./routes/mybaryRoute")

let app=express()

app.engine("handlebars",engine())
app.set("view engine","handlebars")

mongoose.set("strictQuery",true)
mongoose.connect(process.env.DATABASE_URI,(err)=>{
    console.log("db connected");
})


app.use("/mybrary",mybrary)

app.listen(process.env.PORT || 5000,(err)=>{
    console.log("Server is up");
})