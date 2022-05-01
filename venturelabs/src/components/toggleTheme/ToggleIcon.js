import {Icon} from '../../styles/ToggleIcon-style'
import {BsFillSunFill} from 'react-icons/bs'
import {MdModeNight} from 'react-icons/md'
import { useTheme } from '../context/ThemeContext'
export default function ToggleIcon(){
    const {theme,setTheme}=useTheme()
    // console.log(theme)
    return <Icon theme={theme} onClick={()=>setTheme(theme==='light'?'dark':'light')}>{theme==='light'?<MdModeNight/>:<BsFillSunFill/>}</Icon>
}