import React from 'react';

const Gender = ({ selectGender }) => {
    return (
        <div className=" flex min-h-[30px] w-full justify-start items-center gap-3 text-gray-300">
            <label>Male</label>
            <input type="radio" name="radio-2" className="radio radio-primary" onClick={e => selectGender("male")} />
            <label>Female</label>
            <input type="radio" name="radio-2" className="radio radio-primary" onClick={e => selectGender("female")} />
        </div>
    )
}

export default Gender;
