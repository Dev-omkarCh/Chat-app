import React from 'react';
import SearchBar from './SearchBar';
import Conversations from './Conversations';
import Logout from './Logout';

const Sidebar = () => {
  return (
    <div className=" flex flex-col h-full w-[20%] border-r-[1px] border-r-gray-800">
        <SearchBar />
        <Conversations />
        <Logout />
    </div>
  );
};

export default Sidebar;
