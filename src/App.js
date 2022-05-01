import OpenSidebarProvider from "./components/context/OpenDashboard";
import { BrowserRouter } from "react-router-dom";
import SideBarRoutes from "./SideBarRoutes";
import NavBarRoutes from "./NavBarRoute";
import ToggleIcon from "./components/toggleTheme/ToggleIcon";
import ToggleThemeProvider from "./components/context/ThemeContext";
import PageRoutes from "./PagesRoutes";
import ClientListProvider from "./components/context/ClientList";

function App() {
  return (
      <ToggleThemeProvider>
        <ClientListProvider>
        <OpenSidebarProvider>


          <BrowserRouter>
            <NavBarRoutes/>
            <SideBarRoutes/>
            <PageRoutes/>
          </BrowserRouter>
          
          <ToggleIcon />
        </OpenSidebarProvider>
        </ClientListProvider>
      </ToggleThemeProvider>
  );
}

export default App;
