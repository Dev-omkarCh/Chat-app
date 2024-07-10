import useLogout from '@/hooks/useLogout';
import React from 'react';
import {BiLogOut} from "react-icons/bi";

const Logout = () => {
  const {loading,logout} = useLogout();
  
  const handleLogout = async() =>{
      await logout();
  }

  return (
    <button className='flex justify-start items-center h-[6%] w-[100%] pl-3 border-t-[1px] border-t-gray-700 ' onClick={handleLogout}>
      {!loading ? (<BiLogOut className='text-lg hover:text-gray-300 cursor-pointer' />) : (<span className='loading loading-spinner'></span>)}
    </button>
  );
};

export default Logout;
