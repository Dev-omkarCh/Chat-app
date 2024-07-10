import { useAuthContext } from '@/context/AuthContext';
import useConversation from '@/zustand/useConversation';
import React from 'react';
import { getTime } from '@/utils/getTime';

const ChatBubble = ({ message , ref }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const profile = fromMe ? "https://avatar.iran.liara.run/public/" + authUser.profilePic?.slice(42) : "https://avatar.iran.liara.run/public/" + selectedConversation.profilePic?.slice(42);
    const bgColor = fromMe ? "bg-blue-500 text-white" : "bg-gray-800";
    const foramtedTime = getTime(message.createdAt);

    return (
        <>
            <div className={`chat ${fromMe ? "chat-end" : "chat-start"} mt-4 mb-4`} ref={ref}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                             className='bg-gray-300'
                             src={profile} />
                    </div>
                </div>
                <div className={`chat-bubble ${bgColor}`}>{message.message}</div>
                <div className='chat-footer opacity-50'>{ foramtedTime }</div>
            </div>
        </>
    )
};

export default ChatBubble
