import React from 'react'
import { Skeleton } from './ui/skeleton'

const ChatSkeleton = () => {
  return (
    <>
        <div className='flex items-center space-x-4  pl-10 pr-10 pb-10 pt-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
                <Skeleton className="h-4 w-[250px] bg-gray-800" />
                <Skeleton className="h-4 w-[200px] bg-gray-800" />
            </div>
        </div>
        <div className='flex items-center space-x-4  pl-10 pr-10 pb-10 pt-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
                <Skeleton className="h-4 w-[250px] bg-gray-800" />
                <Skeleton className="h-4 w-[200px] bg-gray-800" />
            </div>
        </div>
        <div className='flex justify-end items-center space-x-4  pl-10 pr-10 pb-10 pt-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
                <Skeleton className="h-4 w-[250px] bg-gray-800" />
                <Skeleton className="h-4 w-[200px] bg-gray-800" />
            </div>
        </div>
        <div className='flex justify-end items-center space-x-4  pl-10 pr-10 pb-10 pt-4'>
            <Skeleton className='h-12 w-12 rounded-full' />
            <div className='space-y-2'>
                <Skeleton className="h-4 w-[250px] bg-gray-800" />
                <Skeleton className="h-4 w-[200px] bg-gray-800" />
            </div>
        </div>
       
    </>
  )
}

export default ChatSkeleton
