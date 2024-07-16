import useFindFriend from "@/zustand/useFindFriend";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversations = () => {

    const [ loading, setLoading ] = useState(false);
    // const [ conversations, setConversations ] = useState([]);
    const { conversations, setConversations } = useFindFriend();

    useEffect(()=>{
        const getConversations = async() =>{
            setLoading(true);
            try {
                const res = await fetch(`/api/users`);
                const data = await res?.json();
                if(data.error){
                    throw Error(data.error);
                }
                setConversations(data);
            } catch (e) {
                toast.error(e.message);
            }
            finally{
                setLoading(false);
            }
        };
        getConversations();
    },[]);

    return {loading, conversations, setConversations};
};

export default useGetConversations;
