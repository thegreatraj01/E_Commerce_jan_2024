import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import { GrInstagram } from "react-icons/gr";
import { FaPinterest, FaTwitter } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";


const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-logo" >
                <img src={footer_logo} alt="footer-logo" />
                <p>SHOPPER</p>
            </div >

            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <GrInstagram style={{ color: '#E23E6C' }} />
                </div>
                <div className="footer-icons-container">
                    <FaPinterest style={{ color: '#DDDDDD' }} />
                </div>
                <div className="footer-icons-container">
                    <ImWhatsapp style={{ color: '#075E54' }} />
                </div>
                <div className="footer-icons-container">
                    <FaTwitter style={{ color: '#1C96E8' }} />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2023 - All Right Reserved </p>
            </div>
        </footer >
    )
}

export default Footer;