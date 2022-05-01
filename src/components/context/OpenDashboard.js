import React,{useContext,useState,createContext} from "react";

export const OpenSideBarContext = createContext()

export default function OpenSidebarProvider({children}){
    const [open,setOpen]=useState(false)
    return(
        <OpenSideBarContext.Provider value={{
                open,setOpen
            }}>
                {children}
        </OpenSideBarContext.Provider>
    )
}

export function useOpen(){
    const Context=useContext(OpenSideBarContext)
    if(!Context) throw new Error('useOpen  deve ser usado dentro do Open Provider')
    const {open,setOpen}=Context
    return {open,setOpen}
}