import { useState } from "react";
import {toast} from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () =>{
    const [ loading,setloading ] = useState(false);
    const { setAuthUser } = useAuthContext();

    const signup = async({ fullName, username, password, confirmPassword, gender }) =>{
        
        // * Validation 
        const success = validation({fullName,username,password,confirmPassword,gender});
        if(!success) return;

        // * Signup process Begin
        setloading(true);
        try{
            const res = await fetch(`/api/auth/signup`,{
                method : "POST",
                headers : { "Content-Type": "application/json"},
                body : JSON.stringify({ fullName, username, password, confirmPassword,gender})
            });
            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
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

function validation({fullName,username,password,confirmPassword,gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error("Please fill in all Fields");
        return;
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