import { createContext , useState } from "react";

export const AuthContext = createContext();

export function AuthContextProvider ({ children, update, setUpdate }){
    
    let defaultUser = {}
    if(localStorage.getItem("authentification")){
        defaultUser = JSON.parse(localStorage.getItem("authentification"))
    }

    const [user, setUser] = useState(defaultUser)

    function login (user){
        setUser(user);
        localStorage.setItem("authentification" , JSON.stringify(user));
    }

    function isLogged(){
        return Object.keys(user).length > 0 ;
    }

 
    return <AuthContext.Provider value={{login, isLogged, setUser, update, setUpdate}}>
        {children}
    </AuthContext.Provider>

}