import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../layout/Nav.css'

function Navcomponent() {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed='top'>
            <Container fluid>
                <Navbar.Toggle />
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <Navbar.Offcanvas placement="start" bg="dark" data-bs-theme="dark" className="d-flex justify-content-start">
                    <Offcanvas.Header closeButton>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navcomponent;