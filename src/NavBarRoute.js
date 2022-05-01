import  NavBarMain from "./components/navBar/NavBarMain";
import  NavBar from "./components/navBar/NavBar";

import { Routes,Route} from "react-router-dom";
export default function NavBarRoutes(){
    return(
        <Routes>
            <Route path="/"  index element={<NavBarMain/>}></Route>
            <Route path="*"  index element={<NavBar/>}></Route>

        </Routes>
     
    )
}