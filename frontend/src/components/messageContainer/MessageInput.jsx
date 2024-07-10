import useSendMessage from '@/hooks/useSendMessage';
import React, { useState } from 'react';
import { BsSend } from "react-icons/bs";

const MessageInput = () => {

  const [ message, setMessage ] = useState('');
  const { sendMessage, loading } = useSendMessage();
  
  const handleSubmit = async(e) =>{
      e.preventDefault();
      if(!message) return;
      await sendMessage(message);
      setMessage('');
  }

  return (
    <div className='flex justify-center items-center h-[10%] w-full absolute bottom-0 left-0'>
      <form method='post' className='messageForm flex justify-center items-center h-full w-full gap-[10px]' onSubmit={handleSubmit}>
        <input type="text" placeholder='Type Something...' autoFocus className='h-[80%] w-[90%] pl-5 border-none
         outline-none rounded-full bg-black' value={message} onChange={e =>{ 
            setMessage(e.target.value);
          }}/>
        <button type='submit' className={`flex justify-center items-center h-[50px] w-[50px] border-none outline-none bg-accentColor rounded-full hover:bg-accentHover cursor-pointer ${loading && " btn-disabled"} btn btn-primary p-0`}>
          {loading ? <span className='loading loading-spinner loading-md  text-primary'></span> : <BsSend className='text-[17px] text-white' />}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
