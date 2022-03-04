import React from "react";

import { FaRegCopyright } from 'react-icons/fa';
import logoFooter from '../../assets/images/barraVnsl.png';

import './index.scss';

function Footer() {
    return (
        <footer className="Footer">
            <FaRegCopyright/>
            <p>Copyright 2022 - All Rights Reserved</p>
            <img src={logoFooter} alt="VNSL" />
        </footer>
    )
}

export default Footer;