import React from 'react';

const Avatar = ({ profilePic, onlineStatus}) => {
    return (
        <>
            <div className={`avatar ${onlineStatus ? "online" : ""} bg-transparent`}>
                <div className="w-[40px] h-[40px] rounded-full">
                    {/* <img src={"https://avatar.iran.liara.run/public/" + profilePic?.slice(42) } /> */}
                    <img src={ profilePic } />
                </div>
            </div>
        </>
    )
}

export default Avatar
