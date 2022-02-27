import React from 'react';

import profileImage from '../../assets/images/Logo_Vini_2.png'

import './index.scss';

function Header() {
    return(
        <div className='header'>
            <div className='logo'>
                <img className='image2' src={profileImage} alt='Profile'/>
                {/* <p>V N S L</p> */}
            </div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
        </div>
    )
}

export default Header;