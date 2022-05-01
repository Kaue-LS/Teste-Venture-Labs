import React from "react"
import { Header ,Box, MenuIcon, Title } from "../../styles/NavBar-style"
import {FiMenu} from 'react-icons/fi'
import {useOpen} from '../context/OpenDashboard' 
import {useTheme} from '../context/ThemeContext'
import { useNavigate } from "react-router-dom"
export default function NavBar(){
    const navigate=useNavigate()
    const {open,setOpen}=useOpen()
    const {theme}=useTheme()
    return(
        <Header themes={theme}>
            <nav>
                <Box>
                    <MenuIcon><FiMenu onClick={()=>setOpen(!open)} /></MenuIcon>
                    <Title  onClick={()=>navigate('/')}  font={{"@initial": "large","@bp3": "large","@bp2": "normal","@bp1": "small"}}>Cadastro de Clientes</Title>
                </Box>
            </nav>
        </Header>
    )
}