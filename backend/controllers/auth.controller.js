import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async(req, res) =>{
    try{
        const {fullName, gender, username, password, confirmPassword} = req.body;
        if(password != confirmPassword) return res.status(400).json({error : "Password don't match"});

        const findUser = await User.findOne({username});
        if(findUser) return res.status(400).json({error : "Username already exists"});

        // hash
        const salt = await bcryptjs.genSalt(10);
        const hashPassword = await bcryptjs.hash(password,salt);

        const boyProfilePic = `https://avatar-placeholder.iran.liara.run/boy?username=${username}`;
        const girlProfilePic = `https://avatar-placeholder.iran.liara.run/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password : hashPassword,
            confirmPassword,
            gender : gender.toLowerCase(),
            profilePic : gender.toLowerCase() === "male" ? boyProfilePic : girlProfilePic
        });

        if(newUser) { 
            await newUser.save();
            const payload = {
                id : newUser.id,
                username : newUser.username,
            }
            generateToken(payload,res);
            return res.status(200).json({ newUser }); 
        }
        else return res.status(400).json({ error : "Invalid User data" });

    }
    catch(e){
        console.log("Error in signup controller",e.message);
        return res.status(500).json({error : "Internal Server Error "});
    }
};

export const login = async(req, res) =>{
    try{
        const { username, password } = req.body;
        const findUser = await User.findOne({ username });
        const validPassword = await bcryptjs.compare(password,findUser?.password || "");

        if(!findUser || !validPassword) return res.status(400).json({error : "Invalid Username and Password"});
        const payload = {
            id : findUser.id,
            username : findUser.username,
        }
        generateToken(payload,res);
        return res.status(201).json({ findUser })
    }
    catch(e){
        console.log("Error in login controller",e.message);
        return res.status(500).json({error : "Internal Server Error "});
    }
};

export const logout = (req, res) =>{
    try{
        res.cookie("token","",{maxAge : 0});
        res.status(200).json({ error : "loged Out Successfully"});
    }
    catch(e){
        console.log("Error in login controller",e.message);
        return res.status(500).json({error : "Internal Server Error "});
    }
};
