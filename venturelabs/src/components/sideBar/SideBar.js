import React from "react";
import { Header, Box, Label, Nav } from "../../styles/SideBar-style";
import { FaListAlt } from "react-icons/fa";
import { BsPersonPlusFill } from "react-icons/bs";
import {useOpen} from '../context/OpenDashboard' 
import {useTheme} from '../context/ThemeContext'
import { useNavigate } from "react-router-dom";
export default function SideBar() {
    const navigate=useNavigate()
    const {theme}=useTheme()
    const {open}=useOpen()
  return (
    <Header
      width={!open?('close'):({
        "@initial": "large",
        "@bp3": "large",
        "@bp2": "normal",
        "@bp1": "small",
      })}
    // width={'close'}
      theme={theme}
    >
      <Nav  display={!open?('close'):('open')}>
        <Box  onClick={()=>navigate('/sign')}>
          <BsPersonPlusFill />
          <Label > Novo Cliente</Label>
        </Box>
        <Box onClick={()=>navigate('/list')}>
          <FaListAlt />
          <Label>Lista de Clientes</Label>
        </Box>
      </Nav>
    </Header>
  );
}
