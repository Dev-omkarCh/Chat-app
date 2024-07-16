import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "@/zustand/useAuth";

const useLogout = () => {

  const [loading, setLoading] = useState(false);
  // const { setAuthUser } = useAuthContext();
  const { setAuthUser } = useAuth();

  const logout = async() =>{
    setLoading(true);

    try{
        const res = await fetch(`/api/auth/logout`,{
            method : "POST",
            headers : { "Content-Type": "application/json"},
        });

        const data = await res.json();
        if(data.error) toast.success(data.message);

        localStorage.removeItem("Chat-User");
        setAuthUser(null);
    }
    catch(e){
        toast.error(e.message);
    }
    finally{
        setLoading(false);
    };
  };
  return {loading, logout};
};

export default useLogout;