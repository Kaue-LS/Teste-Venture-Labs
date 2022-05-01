import * as S from '../styles/ClientList-style'
import { useState } from 'react'
import { useTheme } from '../components/context/ThemeContext'
import {useClient} from '../components/context/ClientList'
import Client from './Client'
export default function ClientList(){
    const [openClient,setOpenClient]=useState(false)
    const {list} =useClient()
    const {theme}=useTheme()
    console.log(theme)
    console.log(list[0])
    return (
        <S.ClientList>        
       <S.Title> Lista de Clientes</S.Title>
       <S.List
          width={{
            "@initial": "large",
            "@bp3": "large",
            "@bp2": "normal",
            "@bp1": "small",}}
       >
           {list.length===0?(
               <S.Label>Nenhum cliente foi cadastrado</S.Label>
           ):(
       <>
               
            {list.map((item,index)=>(
                <S.Box
                themes={theme}
                width={{
                    "@initial": "large",
                    "@bp3": "large",
                    "@bp2": "normal",
                    "@bp1": "small",}}
                >
                <S.BoxControl>
                <S.Label>Cliente Nº{index+1}:</S.Label>
                <S.Data>{item.nome} {item.sobrenome}</S.Data>
                </S.BoxControl>
                <S.AreaButton>
                    <S.Button onClick={()=>setOpenClient(!openClient)} step={'proximo'}>Visualizar</S.Button>
                </S.AreaButton>

                {openClient&&(
                    <Client data={item} openClient={()=>setOpenClient(!openClient)}/>
                )

                }
                </S.Box>
            ))}
        </>
            
           )}
           </S.List>
        </S.ClientList>
    )
}