import axios from "axios";
import { createContext, useState } from "react";
import { useEffect } from "react";

// 1 etap context provider yaratish
export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [user, setUer] = useState(null);
    const login = () => {
        
            axios
                .get("http://localhost:3000/users/1")
                .then(function (response) {
    
                    setUer(response.data);
                })
                .catch(function (error) {
    
                    console.log(error);
                });
        
    };

const myValue = {user, login}

    return <AuthContext.Provider value={myValue}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;