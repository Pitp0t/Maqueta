import React from "react";



const isUserLogged = React.createContext()


export function AuthProvider({children}){
    return(
        <isUserLogged.Provider></isUserLogged.Provider>
    )
}