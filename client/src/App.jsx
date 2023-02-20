import { Route, Routes, Navigate } from "react-router-dom"
import Chat from "./pages/Chat"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "bootstrap/dist/css/bootstrap.min.css"
import {Container} from "react-bootstrap"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
    <NavBar />
    <Container>
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="*" element={<Chat />} />
    </Routes>
    </Container>
    </>
  );
}

export default App;
