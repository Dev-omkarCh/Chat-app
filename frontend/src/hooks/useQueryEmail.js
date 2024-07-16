import { useState } from "react";
import { toast } from "react-hot-toast";

const useQueryEmail = () => {
    const [ loading, setLoading ] = useState(false);

    const sendEmail = async( email, fullname, message ) =>{
      try{
            setLoading(true);
            const res = await fetch(`/api/gmail/send/query/${email}`,{
                method : "POST",
                body : JSON.stringify({ fullname, message, email}),
                headers : { "Content-Type": "application/json"},
            });
            
            const data = await res.json();
            if(data) toast.success("Thanks for sending Email");
  
      }
      catch(e){
          toast.error(e.message);
      }
      finally{
        setLoading(false);
      }
    };

    return { sendEmail, loading };
}

export default useQueryEmail;