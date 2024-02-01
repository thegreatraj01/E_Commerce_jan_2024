import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import "./adnavbar.css";
import { Link } from 'react-router-dom';

function AdNavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand className='nav_brand'> <Link t='/addproduct'>SHOPPER</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu30EnREVJUgFQIg0g7oigXXos13ZPbNksw&usqp=CAU" roundedCircle className='me-3'  height={'45px'}/>
                    <NavDropdown title="usename" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"> Another Action </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdNavbar;