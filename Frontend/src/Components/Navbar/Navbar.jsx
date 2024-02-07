import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, useLocation, } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';
import { IoIosArrowDropdown } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../../ReduxToolkit/Slices/AuthSlice';
import { totalItemInCart } from '../../ReduxToolkit/Slices/CartSlice.js';

const Navbar = () => {
  const cartLength = useSelector(totalItemInCart);
  // console.log(totalItemInCart());
  // const { totalItemInCart } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const menuref = useRef();
  const location = useLocation().pathname;
  const user = useSelector(state => state.userslice.user);
  const isLogin = Object.keys(user).length === 0 ? false : true;
  const dispath = useDispatch();

  const dropdown_toggle = (e) => {
    menuref.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  useEffect(() => {
    const setmenuusingpathname = () => {
      if (location === '/') {
        setMenu("shop");
      } else if (location === '/men') {
        setMenu("men");
      } else if (location === '/women') {
        setMenu("women");
      } else if (location === '/kids') {
        setMenu("kids");
      } else {
        setMenu("");
      }
    };

    setmenuusingpathname(); // This will run after the initial render

  }, [location]);

  return (
    <nav className='navbar'>
      <div className="nav-logo">

        <Link to='/'><img src={logo} alt="logo" /></Link>
        <p>SHOPER</p>
      </div>
      <IoIosArrowDropdown className='nav-dropdown' onClick={dropdown_toggle} />
      <ul ref={menuref} className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to='/' > Shop </Link>  {menu === "shop" && <hr />}</li>
        <li onClick={() => { setMenu("men") }}> <Link style={{ textDecoration: "none" }} to='/men'>Men </Link> {menu === "men" && <hr />}</li>
        <li onClick={() => { setMenu("women") }}> <Link style={{ textDecoration: "none" }} to='/women'>Women </Link> {menu === "women" && <hr />}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none" }} to='/kids'>Kids </Link> {menu === "kids" && <hr />}</li>
      </ul>
      <div className="nav-logo-cart">
        {!isLogin && <Link to='/login'> <button>Login</button></Link>}
        {isLogin && <Link to='/login'> <button onClick={() => { dispath(removeUser()); localStorage.removeItem("jwt") }}>Logout</button></Link>}

        <Link to='/cart' ><img className='cart-img' src={cart_icon} alt="cart-icon" /></Link>
        <div className="nav-cart-count">
          {cartLength}
        </div>
      </div>
    </nav>
  )
}

export default Navbar;