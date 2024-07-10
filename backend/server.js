// import packages
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

// routes
import authRoute from "./routes/auth.js";
import messageRoute from "./routes/message.js";
import userRoute from "./routes/user.js";

// files
import connect from "./db/connect.js";
import cookieParser from "cookie-parser";

// setup
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// app uses
app.use(cors({
    origin : '*',
    credentials : true,
    methods : ["GET","POST"]
}));

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());
app.use("/api/auth/",authRoute);
app.use("/api/message",messageRoute);
app.use("/api/users",userRoute);


const auth = (req,res,next) =>{
    const token = req.headers['authorization'].split(' ')[1];
    if(!token) return res.status(402).json({ error : "UnAuotherized"});
    console.log(token);
    return next();
}

// endpoints

app.get("/",(req,res)=>{
    res.send("ok");
});

// app listening 
app.listen(PORT,()=>{
    connect();
    console.log(`app running at port http://localhost:${PORT}`);
});