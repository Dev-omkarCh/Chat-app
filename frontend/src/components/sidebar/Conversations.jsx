import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '@/hooks/useGetConversations';
import useFindFriend from '@/zustand/useFindFriend';

const Conversations = () => {
  const { loading, conversations} = useGetConversations();

  const Loader = () =>{
    return (
        <div className='h-[84%] w-full mt-4 flex justify-center items-center'>
            <span className='loading loading-ring mx-auto h-[20%] w-[30%]'></span>
        </div>
    )
  }

  if(loading) return( <> <Loader></Loader> </> );

  return (
    <div className='conversations flex flex-col justify-start items-center gap-2 h-[84%] w-full mt-4 overflow-auto  scroll-smooth scrollbar-'>
       {conversations?.map((conversation) =>{

            return <Conversation 
                key={conversation._id}
                conversation={conversation}
            />
       })}

    </div>
  );
};

export default Conversations;
