import useGetConversations from '@/hooks/useGetConversations';
import useConversation from '@/zustand/useConversation';
import useFindFriend from '@/zustand/useFindFriend';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { IoSearchSharp } from "react-icons/io5";

const SearchBar = () => {

  const [ search, setSearch ] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useFindFriend();

  const handleSubmit = (e) =>{
      e.preventDefault();
      if(!search) return;

      const conversation = conversations.find( conversation => conversation.username.toLowerCase().includes(search.toLocaleLowerCase()));

      if(conversation){ 
        setSelectedConversation(conversation);
        setSearch("");
      }
      else{
        toast.error(`${search} Not Found`);
      }
      
  }

  return (
    <form className='h-[10%] w-full gap-[10px] border-b-[1px] border-b-gray-500 flex justify-center items-center' onSubmit={handleSubmit}>
        <input type="search" placeholder='Search...' autoFocus className='h-[60%] w-[80%] bg-gray-900 pl-4 pr-4 rounded-[50px]  
        transition-all ease-in-out duration-500
         text-sm ' value={search} onChange={e => setSearch( e.target.value )} />
         
        <button type='submit' className="flex justify-center items-center h-[30px]  transition ease-in-out duration-500 w-[30px]
         bg-accent
         rounded-[50%] cursor-pointer hover:bg-accentHover ">
            <IoSearchSharp className=' font-extrabold text-white' />
        </button>
    </form>
  );
};

export default SearchBar;
