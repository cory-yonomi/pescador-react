import { useState, createContext } from 'react'

const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{
            user: user,
            setUser: setUser
        }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext