import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName : {
        type : String,
        required : true,
    },
    gender : {
        type : String,
        required : true,
        enum : ['male','female']
    },
    username : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 6
    },
    profilePic : {
        type : String,
        default : ""
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    date : {
        type : Date,
        default : Date.now
    }
},
{timestamps : true});

const User = mongoose.model("User",userSchema);
export default User;