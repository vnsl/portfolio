import React from "react";

import { FaRegCopyright } from 'react-icons/fa';

import './index.scss';

function Footer() {
    return (
        <footer className="Footer">
            <FaRegCopyright/>
            <p>Copyright 2022 - VNSL - All Rights Reserved </p>
        </footer>
    )
}

export default Footer;