import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageBox from '../../components/messageContainer/MessageBox';
import "../Chat/Css/chat.css";
import { Toaster } from 'react-hot-toast';
import { useSocketContext } from '@/context/SocketContext';
import NewMessage from '@/components/NewMessage';
import useConversation from '@/zustand/useConversation';

const Chat = () => {
    const { socket, onlineUser } = useSocketContext();
    const { messages, setMessages } = useConversation();

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ isMobile, setIsMobile ] = useState(false);
    const { selectedConversation } = useConversation();

    useEffect(()=>{
       if(width < 600){
          setIsMobile(true);
       }
       else{
         setIsMobile(false);
       }
    },[width]);


    if(isMobile){
        return(
          <div className='flex w-full h-full overflow-x-hidden'>
              <Toaster />
              { !selectedConversation && <Sidebar mobile={isMobile} />}
              { selectedConversation && <MessageBox mobile={isMobile} /> }
          </div>
        )
    }
    return (
      <div className='flex w-full h-full overflow-x-hidden'>
        
         <Toaster />
         <Sidebar />
         <MessageBox />
      </div>
    )
};

export default Chat;
