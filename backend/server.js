// import packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";

// routes
import authRoute from "./routes/auth.js";
import messageRoute from "./routes/message.js";
import userRoute from "./routes/user.js";
import gmailRoute from "./routes/gmail.js";

// files
import connect from "./db/connect.js";
import cookieParser from "cookie-parser";

// app from socket
import { app, server } from "./socket/socket.js";

// setup
dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

// app uses
app.use(cors({
    origin : '*',
    credentials : true,
    methods : ["GET","POST"]
}));

export const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_ID,
        pass: process.env.EMAIL_PASS,
    },
});

app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(cookieParser());
app.use("/api/auth/",authRoute);
app.use("/api/message",messageRoute);
app.use("/api/users",userRoute);
app.use("/api/gmail",gmailRoute);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend", "dist","index.html"));
})

// app listening 
server.listen(PORT,()=>{
    connect();
    console.log(`app running at port http://localhost:${PORT}`);
});