import mongoose from "mongoose";

const connect = async() =>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("connected to database");
    }
    catch(e){console.log(e.message)}
}

export default connect;