const express = require('express');
const connectDB = require('./config/dbConnections');
const erorrHandler = require('./Middlewares/ErrorHandler');
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

connectDB();
const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());
app.use(erorrHandler);

app.get('/',(req,res)=>{
    res.send("Working......");
})
app.listen(port,()=>{
    console.log(`Server Running ${port}`);
    
})
