import { Route, Routes, Navigate } from "react-router-dom"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import NavBar from "./components/NavBar"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import { ChatContextProvider } from "./context/chatContext"
import Home from "./pages/Home"
import ModulePage from "./pages/ModulePage"
import InternetApps from "./pages/InternetApps"
import GroupDesign from "./pages/GroupDesign"
import FinalYearProject from "./pages/FinalYearPorject"
import Entrepeneurship from "./pages/Entrepeneurship"
import AdvanCompLing from "./pages/AdvanCompLing"
import HumanFactors from "./pages/HumanFactors"
import Strategic from "./pages/Strategic"

function App() {
  const {user} = useContext(AuthContext);
  return (
    <ChatContextProvider user = {user}>
    <NavBar />
    <Container>
    <Routes>
      <Route path="/" 
      element={user ? <Chat/> : <Login/>} />
      <Route path="/login" 
      element={user ? <Chat/> : <Login/>}  />
      <Route path="/internetapp" 
      element={user ? <InternetApps/> : <Login/>}  />
      <Route path="/groupdesign" 
      element={user ? <GroupDesign/> : <Login/>}  />
      <Route path="/finalyearproject" 
      element={user ? <FinalYearProject/> : <Login/>}  />
      <Route path="/entrepeneurship" 
      element={user ? <Entrepeneurship/> : <Login/>}  />
      <Route path="/advancedcomputationallinguistics" 
      element={user ? <AdvanCompLing/> : <Login/>}  />
      <Route path="/humanfactors" 
      element={user ? <HumanFactors/> : <Login/>}  />
      <Route path="/stratinfosys" 
      element={user ? <Strategic/> : <Login/>}  />
      <Route path="/Register" 
      element={user ? <Chat/> : <Register/>}  />
      <Route path="/Home" 
      element={user ? <Home/> : <Login/>}  />
      <Route path="/ModulePage" 
      element={user ? <ModulePage/> : <Login/>}  />
      <Route path="*" element={<Chat />} />
      
    </Routes>
    </Container>
    </ChatContextProvider>
  );
}

export default App;
