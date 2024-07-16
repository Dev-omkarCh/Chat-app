import User from "../models/User.js";
import Friend from "../models/Friend.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const getUsersForSidbar = async(req,res) =>{
    try{

        const userId  = req.user._id;

        const user = await Friend.findOne({ userId });
        if(!user) return res.status(200).json([]);

        const allFriends = await User.find({ _id : user.friendsWith }).select('-password');
        res.status(200).json(allFriends);

    }
    catch(e){
        console.log("Error in getUserForSidbar Controller : ",e.message);
        res.status(500).json({ error : "Internal server error" });
    }
}

export const getUserById = async(req,res) =>{
    try{
        const { id } = req.body;
        const userId = req?.user._id;

        if(!id) return res.json({ error : "Please Enter an ID to begin with !"});
        if(id.length < 8) return res.json({ error : "Invalid ID"});

        const user = await Friend.findOne({ userId });
        const otherUser = await Friend.findOne({ userId : id });
       
        if(!user){
            
            const newFriend = await Friend.create({
                userId,
            });
            newFriend.friendsWith.push(id);

            await newFriend.save();

        }
        else{
            const newFriend = await Friend.findOne({ userId });
            if(!newFriend) return res.status(500).json({ error : "idk"});

            newFriend.friendsWith.push(id);
            await newFriend.save();

        }

        if(!otherUser){
            
            const otherFriend = await Friend.create({
                userId : id
            });
            otherFriend.friendsWith.push(userId);

            otherFriend.save();
            const socketId = getReceiverSocketId(id);
            const friend = await User.findOne({ _id : userId }).select("-password");
            if(socketId){
                io.to(socketId).emit("newFriend",(friend));
            }
        }
        else{
            const otherFriend = await Friend.findOne({ userId : id });
            if(!otherFriend) return res.status(500).json({ error : "idk"});

            otherFriend.friendsWith.push(userId);
            await otherFriend.save();

        }
        const currFriends = await User.findOne({ _id : id });
        if(!currFriends) return res.status(500).json({ error : "No User Found With Such ID"});
        return res.status(200).json(currFriends);
    }
    catch(e){
        console.log("Error in getUserById Controller : ",e.message);
        res.status(500).json({ error : "Internal server error" });
    }
}