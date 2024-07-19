import ChatBubble from '../ChatBubble';
import useGetMessages from '@/hooks/useGetMessages';
import ChatSkeleton from '../ChatSkeleton';
import { useEffect, useRef, useState } from 'react';
import useListenMessages from '@/hooks/useListenMessages';
import { useSocketContext } from '@/context/SocketContext';
import Typing from '../Typing';
import useConversation from '@/zustand/useConversation';

const Messages = ({ mobile = false }) => {

  const { loading, messages } = useGetMessages();
  const lastMessage = useRef();
  const {socket} = useSocketContext();
  const [ typing, setTyping ] = useState(false);
  const { selectedConversation } = useConversation();
  useListenMessages();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessage.current?.scrollIntoView({ behavior : "smooth"});
    },100);
  },[messages,typing]);

  const NoMessageSend = () =>{
      return (
        <div className={`h-[80%] pl-10 pr-10 w-full pt-4 flex justify-center items-center text-gray-400 `}>
            Send a Message to Start Conversation
        </div>
      )
  }

  if(messages.length < 1) return <NoMessageSend />

  socket?.on("isTyping",(isTyping)=>{
      if(isTyping){
        setTyping(isTyping);
      }
      else{
        setTyping(isTyping);
      }
  })

  return (
    loading ? <ChatSkeleton /> : 
    <div className={`h-[80%] w-full ${mobile ? "pl-6 pr-6" : "pl-10 pr-10"} pt-4 overflow-auto`}>
      {
        messages?.map(( message )=>{
            return <div key={message._id} ref={lastMessage}>
                <ChatBubble message={message} />
            </div>
        })
      }
      {typing && <Typing profile={selectedConversation.profilePic} />}
    </div>
  );
};

export default Messages;
