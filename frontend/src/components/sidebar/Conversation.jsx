import React from 'react';
import Avatar from '../Avatar';
import useConversation from '@/zustand/useConversation';

const Conversation = ({ conversation }) => {

  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;

  const messageCount = 10;

  return (
    <div className={`flex h-[15%] max-h-[15%] w-[90%] m-auto justify-between items-center 
        gap-4 hover:bg-gray-900 p-2 pr-2 rounded-[10px] cursor-pointer 
        ${isSelected && "bg-gray-800"}`} onClick={() => setSelectedConversation(conversation) } >
      
       <div className='flex gap-4'>
          {/* <Avatar onlineStatus={ userStatus } profilePic={profilePic}  /> */}
          <Avatar profilePic={conversation.profilePic}  />

          <div className='flex justify-center items-center text-gray-400'>{conversation.username}</div>
       </div>

       {/* { messageCount } */}
       <div className='flex justify-center items-center h-[20px] w-[20px] 
       rounded-[50%] bg-accentColor text-black text-[10px] font-bold'>{messageCount}</div>
    </div>
  );
};

export default Conversation;
