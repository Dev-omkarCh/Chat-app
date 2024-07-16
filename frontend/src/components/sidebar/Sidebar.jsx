import React from 'react';
import SearchBar from './SearchBar';
import Conversations from './Conversations';
import Logout from './Logout';
import { AddFriend } from './AddFriend';
import useAuth from '@/zustand/useAuth';

const Sidebar = ({ mobile = false }) => {

  const { authUser } = useAuth();

  return (
    <div className={`flex bg-gray-950 flex-col h-full ${mobile ? "w-full" : "w-[20%]" } border-r-[1px] border-r-gray-800 `}>
        <SearchBar />
        <Conversations />
        <div className='flex justify-evenly items-center h-[10%] w-[100%] pl-3 border-t-[1px] border-t-gray-700 '>
              <AddFriend profilePic={ authUser.profilePic } username={ authUser.username } id={authUser._id} />
              <Logout />
        </div>

    </div>
  );
};

export default Sidebar;
