import React from 'react';
import logo from '../../assets/images/logo_noBar.png';
import { useNavigate } from 'react-router-dom';

import './index.scss';

function HeaderPDF() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return(
        <div className='headerPDF'>
            <img className='logo' src={logo} alt='Profile' onClick={goHome}/>
            <nav className='navbarPDF'>
                   <a href="ViniciusNattan-CV.pdf" download>[ Download ]</a>
            </nav>
        </div>
    )
}

export default HeaderPDF;