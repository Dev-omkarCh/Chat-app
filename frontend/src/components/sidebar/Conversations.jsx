import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '@/hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  if(loading) return( <span className=' loading loading-spinner mx-auto'></span> );

  return (
    <div className='conversations h-[84%] w-full mt-4 overflow-auto scroll-smooth scrollbar-'>
       {conversations.map((conversation) =>{
            return <Conversation 
                key={conversation._id}
                conversation={conversation}
            />
       })}

    </div>
  );
};

export default Conversations;
