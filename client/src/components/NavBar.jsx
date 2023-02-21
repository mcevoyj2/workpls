import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const NavBar = () => {
    const {user} = useContext(AuthContext);
    return ( 
    <Navbar bg="dark" className="mb-4" style={{ height: "3rem"}}>
        <Container>
            <h2>
                <Link to="/" className="link-light text-decoration-none" >
                PeerAcademy
                </Link>
            </h2>
            <span className="text-warning">
                Logged in as {user?.name}
            </span>
            <Nav>
                <Stack direction="horizontal" gap={3}>
                    <Link to="/login" className="link-light text-decoration-none" >
                        Login
                    </Link>
                    <Link to="/register" className="link-light text-decoration-none" >
                        Register
                    </Link>
                </Stack>
            </Nav>
        </Container>
    </Navbar>
    );
}
 
export default NavBar;