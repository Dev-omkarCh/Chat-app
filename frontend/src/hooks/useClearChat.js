import { useState } from 'react'
import { toast} from 'react-hot-toast'
import useFindFriend from '@/zustand/useFindFriend';
import useGetConversations from './useGetConversations';
import useConversation from '@/zustand/useConversation';


const useClearChat = () => {
    const [ loading, setLoading ] = useState(false);
    const { selectedConversation} = useConversation();
  
    const deleteChat = async() =>{
      setLoading(true);
  
      try{
          const res = await fetch(`api/message/clear/${selectedConversation._id}`,{
              method : "POST",
              headers : { "Content-Type": "application/json"},
          });
  
          const data = await res.json();
          if(data) return toast.success(data.message);

      }
      catch(e){
          toast.error(e.message);
      }
      finally{
          setLoading(false);
      };
    };
    return { deleteChat, loading };
};

export default useClearChat;
