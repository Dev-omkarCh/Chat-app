import mongoose from "mongoose";
const Schema = mongoose.Schema;
const friendSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        unique : true,
    },
    friendsWith:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            default : [],
        }
    ],
    // message : [
    //     {
    //         type : mongoose.Schema.Types.ObjectId,
    //         ref : "Message",
    //         default :[]
    //     }
    // ]
},
{timestamps : true});

const Friend = mongoose.model("Friend",friendSchema);

export default Friend;