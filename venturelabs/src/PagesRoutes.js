import "./App.css";

import Main from "./pages/Main";
import ClientList from "./pages/ClientList";
import { Routes,Route} from "react-router-dom";
import NotFound from "./components/notFound/NotFound";
import SignUp from "./pages/SignUp";
import { useTheme } from "./components/context/ThemeContext";
export default function PageRoutes(){
    const {theme}= useTheme()
    return(
        <div className={`theme ${theme}`}>
        <Routes>
        <Route path="/"  index element={<Main/>}></Route>
        <Route path="/sign"  index element={<SignUp/>}></Route>
        <Route path="/list"  index element={<ClientList/>}></Route>
        <Route path="*"  index element={<NotFound/>}></Route>
        </Routes>
        </div>
    )
}