import  SideBar from "./components/sideBar/SideBar";
import { Routes,Route} from "react-router-dom";
export default function SideBarRoutes(){
    return(
        <Routes>
            <Route path="/"  index element={<SideBar/>}></Route>
        </Routes>
     
    )
}