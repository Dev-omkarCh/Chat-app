import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageBox from '../../components/messageContainer/MessageBox';
import "../Chat/Css/chat.css";
import { Toaster } from 'react-hot-toast';

const Chat = () => {
  return (
    <div className='flex w-full h-full'>
      <Toaster />
       <Sidebar />
       <MessageBox />
    </div>
  )
};

export default Chat;
