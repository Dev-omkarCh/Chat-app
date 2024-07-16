import nodemailer from "nodemailer";
import { transporter } from "../server.js";


const emailforWelcome = ( fullname ) =>{
    return `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome Email</title>
        <style>
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: translateY(20px); }
                to { transform: translateY(0); }
            }
            body {
                font-family: Arial, sans-serif;
                background-color: #f6f6f6;
                margin: 0;
                padding: 0;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                animation: fadeIn 1s ease-in-out;
            }
            .header {
                text-align: center;
                padding: 20px;
                background-color: #007bff;
                color: #ffffff;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }
            .header img {
                max-width: 100px;
                animation: slideIn 1s ease-in-out;
            }
            .content {
                padding: 20px;
                text-align: center;
            }
            .content h1 {
                color: #333333;
                animation: fadeIn 1.5s ease-in-out;
            }
            .content p {
                color: #666666;
                animation: fadeIn 2s ease-in-out;
            }
            .button {
                display: inline-block;
                padding: 10px 20px;
                margin: 20px 0;
                color: #ffffff;
                background-color: #28a745;
                text-decoration: none;
                border-radius: 5px;
                animation: slideIn 2.5s ease-in-out;
            }
            .footer {
                text-align: center;
                padding: 20px;
                color: #ffffff;
                background-color: #007bff;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome to Our Application!</h1>
            </div>
            <div class="content">
                <h1>Hi ${fullname}</h1>
                <p>Thank you for signing up for our application. We're excited to have you on board!</p>
                <p>Explore our features and make the most out of your experience.</p>
            </div>
            <div class="footer">
                <p>&copy; All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    `;
}

const emailforQuery = ( fullname, message, email) =>{
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding: 20px;
                    background-color: #4CAF50;
                    color: #ffffff;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                }
                .header img {
                    max-width: 100px;
                }
                .content {
                    padding: 20px;
                }
                .content h1 {
                    color: #333333;
                }
                .content p {
                    color: #666666;
                }
                .content .query {
                    background-color: #f9f9f9;
                    padding: 10px;
                    border-left: 4px solid #4CAF50;
                    margin: 20px 0;
                }
                .footer {
                    text-align: center;
                    padding: 20px;
                    background-color: #4CAF50;
                    color: #ffffff;
                    border-bottom-left-radius: 10px;
                    border-bottom-right-radius: 10px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>New Contact Form Submission</h1>
                </div>
                <div class="content">
                    <h1>Hello Admin,</h1>
                    <p>You have received a new query from your website's contact form:</p>
                    <div class="query">
                        <p><strong>Name:</strong> ${fullname}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Query:</strong></p>
                        <p>${message}</p>
                    </div>
                    <p>Best Regards,<br>Your Website Team</p>
                </div>
                <div class="footer">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>

    `;
}

export const welcomeGmail = async( req, res ) =>{
    
    try{
            const { gmailId } = req.params;
            const { fullname } = req.body;
            if(!gmailId.includes("@")) return res.status(500).json({ error : "Invalid Email"});

            const options = {
                from : process.env.EMAIL_ID,// sender address
                to: gmailId, // list of receivers
                subject: "Welcome To Chat App", // Subject line
                html: emailforWelcome(fullname),
            }

            const info = await transporter.sendMail(options);
            res.status(200).json({message : "Email send"});
    }
    catch(e){
        console.log("Error in getUserForSidbar Controller : ",e.message);
        res.status(500).json({ error : "Internal Server Error" });
    }
}

export const contactEmail = async( req, res ) =>{
    try{
        const { gmailId } = req.params;
        const { fullname, message, email} = req.body;
        if(!gmailId.includes("@")) return res.status(500).json({ error : "Invalid Email"});

        const options = {
            from : gmailId,
            to: process.env.EMAIL_ID,
            subject: `Email by ${fullname} user of ChatApp`, // Subject line
            html: emailforQuery(fullname, message, email),
        }

        const info = await transporter.sendMail(options);
        res.status(200).json({message : "Email send"});
    }
    catch(e){
        console.log("Error in getUserForSidbar Controller : ",e.message);
        res.status(500).json({ error : "Internal Server Error" });
    }
}
