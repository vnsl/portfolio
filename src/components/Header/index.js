import React, { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd';
import logo from '../../assets/images/logo.svg';
import { ImMenu } from 'react-icons/im';

import {Link, animateScroll as scroll } from 'react-scroll';

import './index.scss';

function Header() {
    const [visible, setvisible] = useState(false); 

    const menu = (
        <Menu className='menu' >
            <Menu.Item className='menuItem' key="0">
                <Link to='Home' onClick={scrollToTop}>[ Home ]</Link>
            </Menu.Item>
            <Menu.Item className='menuItem' key="1">
                <Link 
                        to="About"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleMenuClick}
                    >
                        [ About ]
                    </Link>
            </Menu.Item>
            <Menu.Item className='menuItem' key="2">
                <Link 
                        to="Portfolio"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleMenuClick}
                    >
                        [ Projects ]
                    </Link>
            </Menu.Item>
            <Menu.Item className='menuItem' key="3">
            <Link 
                        to="Contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={handleMenuClick}
                    >
                        [ Contact ]
                    </Link>
            </Menu.Item>   
        </Menu>
    );

    function scrollToTop() {
        scroll.scrollToTop();
        setvisible(false);
    }

    function handleVisibleChange() {
        setvisible(!visible)
    }

    function handleMenuClick() {
        setvisible(false);
    }

    return(
        <div className='header'>
            <img className='image2' src={logo} alt='Profile' onClick={scrollToTop}/>
            <nav className='navbar'>
                    {/* <Link 
                        to="Home"
                        activeClass="active"
                        spy={true}
                        exact="true"
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        [ Home ]
                    </Link> */}
                    <Link 
                        to="About"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        [ About ]
                    </Link>
                    <Link 
                        to="Portfolio"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        [ Projects ]
                    </Link>
                    <Link 
                        to="Contact"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        [ Contact ]
                    </Link>
            </nav>
                <Dropdown className='dropdown' overlay={menu} trigger={['click']} placement='bottomRight' visible={visible} onVisibleChange={handleVisibleChange}>
                    <Button className='buttonMenu'><ImMenu></ImMenu></Button>
                </Dropdown>
        </div>
    )
}

export default Header;