import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../ReduxToolkit/Slices/AuthSlice';
import { totalItemInCart } from '../../ReduxToolkit/Slices/CartSlice.js';

function Navigation() {
  const cartLength = useSelector(totalItemInCart);
  const user = useSelector(state => state.userslice.user);
  const isLogin = Object.keys(user).length === 0 ? false : true;
  const dispath = useDispatch();
  const location = useLocation();

  const [showSearch, setShowSearch] = useState(false);
  const handleSearchToggle = () => {
    setShowSearch(!showSearch);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <div className=' position-relative'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className='nav_brand'> <Link to='/'>SHOPPER</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className={`fw-bold ${isActive('/men')}`} as={Link} to="/men">Men</Nav.Link>
              <Nav.Link className={`fw-bold ${isActive('/women')}`} as={Link} to="/women">Women</Nav.Link>
              <Nav.Link className={`fw-bold ${isActive('/kids')}`} as={Link} to="/kids">Kids</Nav.Link>
            </Nav>
            <Nav>
              {/* --------------------------- */}
              <div className="search-container position-relative z-1 " style={{ display: showSearch ? 'block' : 'none' }}>
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
              {/* --------------------------- */}
              <Nav.Link className='my-auto' onClick={handleSearchToggle}><AiOutlineSearch size={25} /></Nav.Link>
              {/* --------------------------- */}
              {!isLogin && <Nav.Link className=' border my-auto px-2 rounded-pill fw-bold' as={Link} to='/login'>Login</Nav.Link>}
              {isLogin &&
                <NavDropdown title={`${user.name}`} id="basic-nav-dropdown">
                  {isLogin && (
                    <>
                      <NavDropdown.Item onClick={() => { dispath(removeUser()); localStorage.removeItem("jwt") }}>Logout</NavDropdown.Item>
                      <NavDropdown.Divider />
                    </>
                  )}
                  {user.isAdmin && <NavDropdown.Item as={Link} to="/admin/addproduct">Admin Page</NavDropdown.Item>}

                </NavDropdown>
              }
              {/* --------------------------- */}
              <Nav.Link as={Link} to="/cart" className="position-relative ms-3">
                <AiOutlineShoppingCart size={35} />
                <span className="position-absolute top-30 start-80 translate-middle badge border border-light rounded-circle bg-danger">
                  {cartLength}
                </span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
