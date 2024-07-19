import { SocketContext, useSocketContext } from '@/context/SocketContext';
import useSendMessage from '@/hooks/useSendMessage';
import useConversation from '@/zustand/useConversation';
import React, { useRef, useState } from 'react';
import { BsSend } from "react-icons/bs";

const MessageInput = ({ mobile = false }) => {

  const [ message, setMessage ] = useState('');
  const messageRef = useRef();
  const { sendMessage, loading } = useSendMessage();
  const { socket } =  useSocketContext();
  const { selectedConversation } = useConversation();
  
  const handleSubmit = async(e) =>{
      e.preventDefault();
      if(!message) return;
      await sendMessage(message);
      socket.emit("typing", selectedConversation._id, false);
      setMessage('');
  }


  const something = (e) =>{
      setMessage(e.target.value);
      messageRef.current = e.target.value;
      
      if(messageRef.current.length >= 1){
        socket.emit("typing", selectedConversation._id, true);
      }
      else if(messageRef.current.length === 0){
        socket.emit("typing", selectedConversation._id, false);
      }
  }

  return (
    <div className='flex justify-center items-center h-[10%] w-full absolute bottom-0 left-0'>
      <form method='post' className='messageForm flex justify-center items-center h-full w-full gap-[10px]' onSubmit={handleSubmit}>
        <input type="text" placeholder='Type Something...' className={`${mobile ? "h-[70%] w-[80%]" : "h-[80%] w-[90%]"} 
        sm:  pl-5 border-none
         outline-none rounded-full bg-black`} value={message} onChange={e => something(e) }/>
        <button type='submit' className={`flex justify-center bg-accent items-center 
          ${mobile ? "h-[40px] w-[40px]" : "h-[50px] w-[50px]"}    
          border-none outline-none rounded-full hover:bg-accentHover cursor-pointer ${loading && " btn-disabled"} btn btn-primary p-0`}>
          {loading ? <span className='loading loading-spinner loading-md text-primary'></span> : <BsSend className='text-[15px] text-white' />}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
