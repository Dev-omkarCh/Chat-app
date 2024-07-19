import React from 'react'

const Typing = ({ profile }) => {
  return (
    <>
            <div className={`chat chat-start mt-4 mb-4`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img
                             className='bg-gray-300'
                             src={profile} />
                    </div>
                </div>
                <div className={`chat-bubble`}><span className=' loading loading-dots loading-md' ></span></div>
            </div>
        </>
  )
}

export default Typing
