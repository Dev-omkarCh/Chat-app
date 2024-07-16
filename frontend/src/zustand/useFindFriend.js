import React from 'react'
import { create } from 'zustand';

const useFindFriend = create(( set ) =>({
    conversations : [],
    setConversations : ( conversations ) => set({ conversations })
}));

export default useFindFriend;