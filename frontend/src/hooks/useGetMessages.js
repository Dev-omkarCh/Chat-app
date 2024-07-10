import useConversation from "@/zustand/useConversation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetMessages = () => {

    const [ loading, setLoading ] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(()=>{

        const getMessage = async() =>{
            setLoading(true);
            try {
                const res = await fetch(`/api/message/${ selectedConversation._id }`);

                const data = await res.json();
                if(data.error) throw new Error(data.error);

                setMessages(data);

            } catch (e) {
                toast.error(e.message);
            }
            finally{
                setLoading(false);
            }
        }

        if(selectedConversation?._id) getMessage();
    },[ selectedConversation?._id, setMessages ]);

    return { messages, loading };

}

export default useGetMessages;
