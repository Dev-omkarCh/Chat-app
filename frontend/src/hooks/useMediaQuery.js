import { query } from 'express';
import React, { useEffect, useState } from 'react'

export const useMediaQuery = () => {

    const [value, setValue] = useState();

    useEffect(()=>{
        function onChange(event){
            setValue(event.matches);
        }


        const result = matchMedia(query);
        result.addEventListener("change",onChange);
        setValue(result.matches);

        return () => result.removeEventListener("change",onChange);

    },[query])

    return value;
}
