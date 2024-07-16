import { useState } from 'react'
import { toast} from 'react-hot-toast'
import useFindFriend from '@/zustand/useFindFriend';
import useGetConversations from './useGetConversations';


const useFind = () => {
    const [ loading, setLoading ] = useState(false);
    const { conversations ,setConversations } = useFindFriend();
    // const { conversations ,setConversations } = useGetConversations();
  
    const addFriend = async( id ) =>{
      setLoading(true);
  
      if(!id) return setLoading(false);
      try{
          const res = await fetch(`api/users/add`,{
              method : "POST",
              headers : { "Content-Type": "application/json"},
              body : JSON.stringify({ id })
          });
  
          const data = await res.json();
          setConversations([...conversations, data]);

      }
      catch(e){
          toast.error(e.message);
      }
      finally{
          setLoading(false);
      };
    };
    return { loading, addFriend };
};

export default useFind;
