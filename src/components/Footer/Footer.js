import './Footer.css'


import React from 'react';
import { Navbar } from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="bg-light text-center p-2">
                © All right reserved by 2021 || <b>KHOSHRU<span className='text-danger'>B</span>OOK</b>
            </div>
        </div>
    );
};

export default Footer;
