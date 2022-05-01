import React,{useContext,useState,createContext} from "react";
import '../../App.css'
export const ToggleThemeContext = createContext()

export default function ToggleThemeProvider({children}){
    const [theme,setTheme]=useState('light');
    return(
        <ToggleThemeContext.Provider value={{
                theme,setTheme
            }}>
                {children}
        </ToggleThemeContext.Provider>
    )
}

export function useTheme(){
    const Context=useContext(ToggleThemeContext)
    if(!Context) throw new Error('useTheme  deve ser usado dentro do Theme Provider')
    const { theme,setTheme}=Context
    return { theme,setTheme}
}