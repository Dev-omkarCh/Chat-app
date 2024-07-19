import React, { useEffect } from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from "react-icons/ti";
import Avatar from '../Avatar';
import useConversation from '@/zustand/useConversation';
import useAuth from '@/zustand/useAuth';
import { IoMdArrowBack } from "react-icons/io";
import { useSocketContext } from '@/context/SocketContext';
import useClearChat from '@/hooks/useClearChat';
import DeleteMessage from './DeleteMessage';

const NoChatSelected = ({ mobile }) => {

  const { authUser } = useAuth();

  return (
    <div className={`flex ${mobile ? "w-full" : "w-[80%]"} justify-center items-center bg-gray-900 flex-col gap-6`}>
      <div className='text-[50px] font-bold'>Welcome { authUser.username }</div>
      <div className='text-[20px]'>Select a Chat to Start Messaging</div>
      <div><TiMessages className='text-[30px] text-accent' /></div>
    </div>
  );
};

const MessageBox = ({ mobile = false }) => {

    const { selectedConversation, setSelectedConversation } = useConversation();
    const { onlineUser } = useSocketContext();
    const isOnline = onlineUser.includes(selectedConversation?._id);
    const {loading, deleteChat} = useClearChat();
    const {setMessages} = useConversation();

    useEffect(()=>{

      // clean up on unmount
      return () => setSelectedConversation(null);
    },[]);

    useEffect(()=>{},[isOnline]);

    const goBack = () =>{
        setSelectedConversation(null);
    }

    if(selectedConversation) {
      return (
        <div className={`h-full ${mobile ? "w-full" : "w-[80%]"} relative bg-gray-900`}>
            <div className="flex justify-start items-center border-b-[1px] border-b-gray-500 h-[10%] w-full gap-5 pl-6 relative">
              <button className='text-[20px]' onClick={goBack}><IoMdArrowBack /></button>
              <Avatar onlineStatus={isOnline}  profilePic={selectedConversation.profilePic} />
              <span>{selectedConversation.username}</span>
              <DeleteMessage />
            </div>
            <Messages mobile={mobile}  />
            <MessageInput mobile={mobile} />
        </div>
      );
    }
    return (<> <NoChatSelected mobile={mobile} /> </>);
};

export default MessageBox;
