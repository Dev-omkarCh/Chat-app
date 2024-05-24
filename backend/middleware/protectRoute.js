import jwt from "jsonwebtoken";
import User from "../models/User.js";
const protectRoute = async(req,res,next) =>{
    try{
        
        const token = req.cookies.token;
        if(!token)  return res.status(401).json({ error : "Unauthorized - No token Provided "});

        const userData = jwt.verify(token,process.env.JWT_SECRET);
        if(!userData) return res.status(401).json({ error : "Unauthorized - Invalid Token "});

        const findUser = await User.findById(userData.id).select("-password");
        if(!findUser) return res.status(401).json({ error : "User not Found"} );

        req.user = findUser;
        return next();
    }
    catch(e){
        console.log("Error in protectRoute middleware: ",e.message);
        return res.status(500).json({ error : "Internal Server Error" });
    }
}

export default protectRoute;