import mongoose from "mongoose";
const Schema = mongoose.Schema;
const coversationSchema = new Schema({
    participants:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    ],
    message : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Message",
            default :[]
        }
    ]
},
{timestamps : true});

const Conversation = mongoose.model("Conversation",coversationSchema);

export default Conversation;