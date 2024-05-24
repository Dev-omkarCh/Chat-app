import jwt from "jsonwebtoken";

const generateToken = (payload,res) =>{
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn : "30d" });
    res.cookie("token",token,{ 
        httpOnly : true,
        secure : process.env.NODE_ENV !== "development",
        maxAge : 30 * 24 * 60 * 60 * 1000,
        sameSite : "strict"
    });
}

export default generateToken;