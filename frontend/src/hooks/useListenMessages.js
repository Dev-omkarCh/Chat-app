import { useSocketContext } from "@/context/SocketContext"
import useConversation from "@/zustand/useConversation";
import { useEffect } from "react";
import notificationSound from "../utils/notification.mp3";
import useGetConversations from "./useGetConversations";

const useListenMessages = () => {
    const { socket, onlineUser } = useSocketContext();
    const { messages, setMessages } = useConversation();
    const { selectedConversation } = useConversation();
    const { conversations, setConversations } = useGetConversations();

    useEffect(()=>{
        
        socket?.on("newMessage",({ newMessage, receiverId, senderId}) =>{
            const sound = new Audio(notificationSound);
            sound.play();
            if(senderId === selectedConversation._id){
                setMessages([...messages, newMessage]);
            }
        });

        return ()=> {socket.off("newMessage"); socket.off("newFriend")};
    },[socket, messages]);
}

export default useListenMessages;
