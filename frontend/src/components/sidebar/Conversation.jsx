import React from 'react';
import Avatar from '../Avatar';
import useConversation from '@/zustand/useConversation';
import { useSocketContext } from '@/context/SocketContext';

const Conversation = ({ conversation }) => {

  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUser } = useSocketContext();
  const isOnline = onlineUser.includes(conversation._id);

  return (
    <div className={`flex h-[15%] max-h-[15%] w-[90%] justify-between items-center 
        gap-4 hover:bg-gray-900 p-2 pr-2 rounded-[10px] cursor-pointer 
        ${isSelected && "bg-gray-900"}`} onClick={() => setSelectedConversation(conversation) } >
      
       <div className='flex gap-4'>
          {/* <Avatar onlineStatus={ userStatus } profilePic={profilePic}  /> */}
          <Avatar onlineStatus={ isOnline } profilePic={conversation.profilePic}  />

          <div className='flex justify-center items-center text-gray-400'>{conversation.username}</div>
       </div>

       {/* { messageCount } */}
       {/* <div className='flex justify-center items-center h-[20px] w-[20px] 
       rounded-[50%] bg-accentColor text-black text-[10px] font-bold'>{messageCount}</div> */}
    </div>
  );
};

export default Conversation;
