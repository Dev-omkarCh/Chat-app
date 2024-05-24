import User from "../models/User.js";

export const getUsersForSidbar = async(req,res) =>{
    try{

        const loggedInUserId  = req.user._id;
        // test
        const allUserExceptTheSender = await User.find( { _id: { $ne: loggedInUserId }} ).select("-password");
        res.status(200).json(allUserExceptTheSender);

    }
    catch(e){
        console.log("Error in getUserForSidbar Controller : ",e.message);
        res.status(500).json({ error : "Internal server error" });
    }
}