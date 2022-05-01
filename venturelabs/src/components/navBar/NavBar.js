import React from "react"
import { Header ,Box, Title } from "../../styles/NavBar-style"
import {useTheme} from '../context/ThemeContext'
import { useNavigate } from "react-router-dom"
export default function NavBar(){
    const navigate=useNavigate()
    const {theme}=useTheme()
    return(
        <Header themes={theme}>
            <nav>
                <Box>
                    <Title  onClick={()=>navigate('/')}  font={{"@initial": "large","@bp3": "large","@bp2": "normal","@bp1": "small"}}>Cadastro de Clientes</Title>
                </Box>
            </nav>
        </Header>
    )
}