import { useState, createContext, useContext } from "react";
import { ClientJS } from "clientjs";
import axios from 'axios';


const AuthContext = createContext(null);

export const getFingerprint = () => {
    const client = new ClientJS();
    return {
        UserAgent: client.getUserAgent(),
        Fingerprint: client.getFingerprint(),
        OS: client.getOS() + ' ' + client.getOSVersion(),
    };
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('user'));

    const login = (user) => {
        setUser(user);
        localStorage.setItem('user', user);
    }

    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const Logout = () => {
    const auth = useAuth();
    const fingerprint = getFingerprint();
    var reqBody = {
        'access_token': localStorage.getItem('accessToken')
    }

    axios.post('https://api.proxysafe.ru/auth/logout/', JSON.stringify(reqBody))
        .then(function(response) {
            const jsonData = response.data;
            if (jsonData.statusCode === 200) {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        })
        .then(function (error) {
            console.log(error);
        })
    auth.logout();
}

export const useAuth = () => {
    return useContext(AuthContext);
}