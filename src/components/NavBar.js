import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";

const {Brand, Toggle, Collapse} = Navbar;

const NavBar = () =>{
    return <>
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#">Quienes somos</Nav.Link>
                        <Nav.Link href="#">Contacto</Nav.Link>
                        <Nav.Link href="#">Carrito<CartWidget/></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;