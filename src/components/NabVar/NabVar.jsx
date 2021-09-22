import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const NabVar = ({children}) => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
        <Link to='/' exact>
          <Navbar.Brand href="#home">Osvaldo Automotores</Navbar.Brand>
        </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">stock</Nav.Link>
              <Nav.Link href="#link">Osvaldo</Nav.Link>
              <NavDropdown title="Tipos de Vehiculos" id="basic-nav-dropdown">
              <Link to='/categoria/autos' exact>
              <NavDropdown.Item href="#action/3.1">Autos</NavDropdown.Item>
              </Link>
                <Link to='/categoria/camionetas' exact>
                <NavDropdown.Item href="#action/3.2">Camionetas</NavDropdown.Item>
                </Link>
                
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Financiaciones</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
          </Navbar.Collapse>
        </Container>
        <Link exact to='/cart'>
        {children}
        </Link>
      </Navbar>
)

}
export default NabVar;