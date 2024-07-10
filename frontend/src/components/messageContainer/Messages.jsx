import ChatBubble from '../ChatBubble';
import useGetMessages from '@/hooks/useGetMessages';
import ChatSkeleton from '../ChatSkeleton';
import { useEffect, useRef } from 'react';

const Messages = () => {

  const { messages, loading } = useGetMessages();
  const lastMessage = useRef();

  useEffect(()=>{
    setTimeout(()=>{
      lastMessage.current?.scrollIntoView({ behavior : "smooth"});
    },100);
  },[messages]);

  const NoMessageSend = () =>{
      return (
        <div className='h-[80%] w-full pl-10 pr-10 pt-4 flex justify-center items-center text-gray-400 '>
            Send a Message to Start Conversation
        </div>
      )
  }

  if(messages.length < 1) return <NoMessageSend />

  return (
    loading ? <ChatSkeleton /> : 
    <div className='h-[80%] w-full pl-10 pr-10 pt-4 overflow-auto'>
      {
        messages?.map(( message )=>{
            return <div key={message._id} ref={lastMessage}>
                <ChatBubble message={message} />
            </div>
        })
      }
    </div>
  );
};

export default Messages;
