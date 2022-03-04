import React from "react";

import { FaRegCopyright } from 'react-icons/fa';
import logoFooter from '../../assets/images/barraVnsl.png';

import './index.scss';

function Footer() {
    return (
        <footer className="Footer">
            <FaRegCopyright/>
            <p>Copyright 2022 - <img src={logoFooter} alt="VNSL" /> - All Rights Reserved </p>
        </footer>
    )
}

export default Footer;