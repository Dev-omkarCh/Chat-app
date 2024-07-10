import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import Avatar from '../Avatar';
import useConversation from '@/zustand/useConversation';

const NoChatSelected = () => {
  return (
    <div className="flex w-[80%] justify-center items-center flex-col gap-6">
      <div className='text-[50px] font-bold'>Welcome</div>
      <div className='text-[20px]'>Select a Chat to Start Messaging</div>
      <div><TiMessages className='text-[30px]' /></div>
    </div>
  );
};

const MessageBox = () => {

    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(()=>{

      // clean up on unmount
      return () => setSelectedConversation(null);
    },[]);

    if(selectedConversation) {
      return (
        <div className='h-full w-[80%] relative bg-gray-900'>
            <div className="flex justify-start items-center border-b-[1px] border-b-gray-500 h-[10%] w-full gap-5 pl-6">
              <Avatar profilePic={selectedConversation.profilePic} />
              <span>{selectedConversation.username}</span>
            </div>
            <Messages />
            <MessageInput />
        </div>
      );
    }
    return (<> <NoChatSelected /> </>);
};

export default MessageBox;
