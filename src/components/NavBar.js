import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
    
    return <>
        <Navbar expand="lg" fixed="top" >
            <Container>
                <Link className="a-brand" to='/'>
                    <Navbar.Brand>Valkiria</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link className="a" to='/categoria/auriculares'>
                                    Auriculares
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Link className="a" to='/categoria/mouse'>
                                    Mouse
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Link className="a" to='/categoria/teclado'>
                                    Teclados
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Link className="a" to='/categoria/camara'>
                                    Webcams
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Link className="a" to='/categoria/audio'>
                                    Audio
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item><Link className="a" to='/categoria/accesorios'>
                                    Accesorios
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>Contacto</Nav.Link>
                        <Nav.Link><Link className="a-cart" to='/cart'><CartWidget/></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;