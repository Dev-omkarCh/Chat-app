import Conversation from "../models/Conversation.js";
import Message from "../models/Message.js";
import { getReceiverSocketId, io } from "../socket/socket.js";
export const sendMessage = async(req,res) =>{
    try{
        const { message } = req.body;
        const { id } = req.params;
        const receiverId = id;
        const senderId = req.user?._id;

        let conversation = await Conversation.findOne({
            participants : { $all : [senderId, receiverId ]},
        })

        if(!conversation) {
            conversation = await Conversation.create({
                participants : [senderId, receiverId ],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.message.push(newMessage._id);
        }
        
        await Promise.all([conversation.save(),newMessage.save()]);


        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId) {
            io.to(receiverSocketId).emit( "newMessage", { newMessage, receiverId, senderId } );
        }

        return res.status(201).json(newMessage);

    }
    catch(e){
        console.log("Error in sendMessage Controller : ",e.message);
        res.status(500).json({ error : "Internal server error" });
    }
}

export const getMessage = async( req, res ) =>{
    try{
        const { id : userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants : { $all: [ senderId, userToChatId ] },
        }).populate("message");

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.message;
        res.status(200).json(messages);
    }
    catch(e){
        console.log("Error in getMessage Controller : ",e.message);
        res.status(500).json({ error : "Internal server error" });
    }
};