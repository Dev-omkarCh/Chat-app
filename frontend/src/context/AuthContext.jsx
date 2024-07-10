import React, { useContext, useState } from 'react';
import { createContext } from 'react';

export const AuthContext = createContext(undefined);

export const useAuthContext = () =>{
    const { authUser, setAuthUser } = useContext(AuthContext);

    return { authUser, setAuthUser };
}

// export const useAuthContext = () =>{
//     return useContext(AuthContext);
// }

// export const AuthContextProvider = ({ Children }) =>{
//     const [authUser,setAuthUser] = useState(JSON.parse(localStorage.getItem("Chat-User")) || null);
// return 
//     return <AuthContext.Provider value={{authUser,setAuthUser}}>
//         { Children }
//     </AuthContext.Provider>
// }
