import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import "./adnavbar.css";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../../ReduxToolkit/Slices/AuthSlice.js';

function AdNavbar() {
    const user = useSelector(state => state.userslice.user);
    const dispath = useDispatch();

    // console.log(user);
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container >
                <Navbar.Brand className='nav_brand'> <Link to='/admin/addproduct'>SHOPPER</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end">
                    <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlu30EnREVJUgFQIg0g7oigXXos13ZPbNksw&usqp=CAU" roundedCircle className='me-3' height={'45px'} />

                    {/* --------------------------- */}

                    <NavDropdown title={`${user.name}`} id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to="/">User Page</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => { dispath(removeUser()); localStorage.removeItem("jwt") }}>Logout</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AdNavbar;