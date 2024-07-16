import { createContext, useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import useAuth from "@/zustand/useAuth";
import useGetConversations from "@/hooks/useGetConversations";

export const SocketContext = createContext(undefined);

export const useSocketContext = () =>{
    return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) =>{

    const [ socket, setSocket ] = useState(null);
    const [ onlineUser, setOnlineUser]  = useState([]);
    const { authUser } = useAuth();
    const { conversations, setConversations } = useGetConversations();

    useEffect(()=>{
        if( authUser ){
            const socket = io("http://localhost:4000", {
                query : {
                    userId : authUser._id
                }
            });

            setSocket(socket);

            socket.on("getOnlineUsers",(users)=>{
                setOnlineUser(users);
            });

            socket.on("newFriend",( friend )=>{
                setConversations([...conversations,friend]);
            });

            return () => socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
            }
        }
    },[authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUser }}>
            { children }
        </SocketContext.Provider>
    );
};
