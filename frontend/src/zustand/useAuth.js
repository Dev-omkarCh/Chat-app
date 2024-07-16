import { create } from 'zustand';

const useAuth = create(( set ) =>({
    // selectedConversation: null,
    // setSelectedConversation: ( selectedConversation ) => set({ selectedConversation }),
    // messages : [],
    // setMessages : ( messages ) => set({ messages })
    authUser : JSON.parse(localStorage.getItem("Chat-User")) || null,
    setAuthUser : ( authUser ) => set({ authUser }),
}));

export default useAuth;