import { useState } from "react";
import {toast} from "react-hot-toast";
import useAuth from "@/zustand/useAuth";

const useSignup = () =>{
    const [ loading,setloading ] = useState(false);
    // const { setAuthUser } = useAuthContext();
    const { setAuthUser } = useAuth();

    const signup = async( fullname, username, password, confirmPassword, gender, email ) =>{
        
        setloading(true);
        // * Validation 
        const success = validation( fullname, username, password, confirmPassword ,gender, email);
        if(!success) return setloading(false);

        // * Signup process Begin
        try{
            const res = await fetch(`/api/auth/signup`,{
                method : "POST",
                headers : { "Content-Type": "application/json"},
                body : JSON.stringify({ fullName : fullname, username, password, confirmPassword, gender, email})
            });
            const data = await res.json();
            if(data.error) return toast.error(data.error);
            // localStorage
            localStorage.setItem("Chat-User",JSON.stringify(data));
            //context
            setAuthUser(data);
        }
        catch(e){
            toast.error(e.message);
        }
        finally{
            setloading(false);
        }
    };
    return { loading, signup };
};

function validation( fullname, username, password, confirmPassword, gender, email){
    if(!fullname || !username || !password || !confirmPassword || !gender || !email){
        toast.error("Please fill in all Fields");
        return;
    }
    if(!email.includes("@")){
        toast.error("invalid email");
        return false;
    }
    if(password !== confirmPassword){
        toast.error("Password do not match");
        return false;
    }
    if(password.length < 6){
        toast.error("Password must be atleast 6 characters");
        return false;
    }
    return true;
};

export default useSignup;