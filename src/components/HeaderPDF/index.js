import React from 'react';
import logo from '../../assets/images/logo_noBar.png';
import { useNavigate, Link } from 'react-router-dom';

import './index.scss';

function HeaderPDF() {
    const navigate = useNavigate();

    function goHome() {
        navigate('/');
    }

    return(
        <div className='headerPDF'>
            <img className='logo' src={logo} alt='Profile' onClick={goHome}/>
            <nav className='navbar'>
                   <Link to="/">[ Home ]</Link>
            </nav>
        </div>
    )
}

export default HeaderPDF;