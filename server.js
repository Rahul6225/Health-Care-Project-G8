import express from "express";
import connectDB from "./config/dbConnections.js";
import errorHandler from "./Middlewares/ErrorHandler.js";
import cors from "cors";
import dotenv from "dotenv";
import { handlebars } from "hbs";
import { inherits } from "util";
dotenv.config();
const myobj={
    username:"rahul",
    roll:25,
    subject:"English"
}
connectDB();
const app = express();
const port = process.env.PORT || 5000;
app.set('view engine', 'hbs');
app.use(express.json());
app.use(cors());
app.use(errorHandler);
app.get("/home",(req,res)=>{
    const data={
        title:"documet",
        message:"hello"
    };
    res.render("home",data);
})

app.get("/user",(req,res)=>{
    const users=[
        {
        username:"Rahul",
        roll:25,
        subject:"English"},
        {
        username:"Anil",
        roll:75,
        subject:"Hindi"
        }
    ]
    res.render("user",{users})
})
handlebars.registerPartial()inherits

app.get('/',(req,res)=>{
    res.send("Working......");
})
app.listen(port,()=>{
    console.log(`Server Running ${port}`)
    
})
