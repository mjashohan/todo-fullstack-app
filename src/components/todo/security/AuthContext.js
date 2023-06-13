import React, {createContext, useContext, useState} from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {
<<<<<<< HEAD

    const [isAuthenticated, setAuthenticated] = useState(false)

    function login(username, password) {
        if(username === 'mjashohan' && password==='sara') {
            setAuthenticated(true)
            console.log('Success')
            return true
        }
        else {
            setAuthenticated(false)
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={ { isAuthenticated, login, logout } }>
=======
    const [number, setNumber] = useState(0)

    const [isAuthenticated, setAuthenticated] = useState(false)

    //setInterval(() => setNumber(number + 1), 10000)

    const valueToBeShared = {number, isAuthenticated, setAuthenticated}
    return (
        <AuthContext.Provider value={ valueToBeShared }>
>>>>>>> 67aeb01780623f92645fc49d4f05f8c9a9e0d6b4
            {children}
        </AuthContext.Provider>
    )
}