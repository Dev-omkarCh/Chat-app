import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "@/zustand/useAuth";

const useLogin = () => {

  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuth();

  const login = async( username, password) =>{
    setLoading(true);

    const isvalid = validation( username,password );
    if(!isvalid) return setLoading(false);
    try{
        const res = await fetch(`/api/auth/login`,{
            method : "POST",
            headers : { "Content-Type": "application/json"},
            body : JSON.stringify({ username, password })
        });

        const data = await res.json();
        if(data.error){
            throw new Error(data.error);
        }
        
        localStorage.setItem("Chat-User", JSON.stringify(data));
        setAuthUser(data);
    }
    catch(e){
        toast.error(e.message);
    }
    finally{
        setLoading(false);
    };
  };
  return {loading, login};
};

function validation(username,password){
    if(!username || !password ){
        toast.error("Please fill in all Fields");
        return;
    }
    if(password.length < 6){
        toast.error("Password must be atleast 6 characters");
        return false;
    }
    return true;
};

export default useLogin;
