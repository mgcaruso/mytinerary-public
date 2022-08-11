import React from "react";
import '../styles/footer.css'
import Logo from '../assets/logo-lighter.png'
import { Link as LinkRouter } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-box footer-1 py-2">
                <div className="contact-box address">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <h6 className="text-sm">21 St</h6>
                    <h4 className="text-sm">London, England</h4>
                </div>
                <div className="contact-box mail">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a className="mailto text-sm" href="mailto:mytinerary@gmail.com" >mytinerary@gmail.com</a>
                </div>

            </div>
            <div className="footer-box footer-2">
                <img className="h-14" src={Logo} alt="MiTinerary Logo" />
                <div className="media-box">
                    <LinkRouter to="/"><BsInstagram className="a-footer text-slate-100 px-2 text-4xl"/></LinkRouter>
                    <LinkRouter to="/"><BsFacebook className="a-footer text-slate-100 px-2 text-4xl"/></LinkRouter>
                    <LinkRouter to="/"><BsTwitter className="a-footer text-slate-100 px-2 text-4xl"/></LinkRouter>
                    <LinkRouter to="/"><BsLinkedin className="a-footer text-slate-100 px-2 text-4xl"/></LinkRouter>
                    
                </div>
            </div>
            <div className="footer-box footer-3">
                <h4>NAVIGATION</h4>
                <ul>
                    <li><HashLink smooth={true} offset={70} duration={1000} className="a-footer text-lg" to="/#welcome">Home</HashLink></li>
                    <li><LinkRouter className="a-footer text-lg" to="/cities">Cities</LinkRouter></li>
                </ul>

            </div>
        </div>
    )
}

export default Footer;
