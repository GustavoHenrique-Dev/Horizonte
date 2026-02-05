import { useContext, createContext} from "react";

export const AuthContext = createContext()

export function AuthContextProvider({value, children}){
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuthContext(){
    return useContext(AuthContext)
}