import React,{useContext,createContext} from "react";

export const ClientListContext = createContext()

export default function ClientListProvider({children}){
    const list=[]
    return(
        <ClientListContext.Provider value={{
            list
            }}>
                {children}
        </ClientListContext.Provider>
    )
}

export function useClient(){
    const Context=useContext(ClientListContext)
    if(!Context) throw new Error('useClient  deve ser usado dentro do Open Provider')
    const {list}=Context
    return {list}
}