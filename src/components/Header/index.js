import React from 'react';

import logo from '../../assets/images/logo.svg'

import './index.scss';

function Header() {
    return(
        <div className='header'>
           
            <img className='image2' src={logo} alt='Profile'/>
           
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/about">About</a>
            </div>
            <div>
                <a href="/projects">Projects</a>
            </div>
            <div>
                <a href="/contact">Contact</a>
            </div>
        </div>
    )
}

export default Header;