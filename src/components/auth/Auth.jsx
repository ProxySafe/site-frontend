import { FingerprintJSPro } from "@fingerprintjs/fingerprintjs-pro-react";
import { useState, createContext, useContext } from "react";
import { ReactSession } from "react-client-session";
import { ClientJS } from "clientjs";

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

export const useAuth = () => {
    return useContext(AuthContext);
}