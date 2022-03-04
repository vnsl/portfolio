import React from "react";

import profileImage from '../../assets/images/profile.jpg';
import Polygon from '../../assets/images/polygon.svg';

import { FaCss3Alt, FaHtml5, FaSass, FaReact, FaAngular, FaNodeJs} from 'react-icons/fa';
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import { SiJavascript, SiPostgresql } from 'react-icons/si';


import './index.scss';

function Contact() {
    return (
        <div className="Contact">
            <div className="ContactProfile">
                <img className='image' src={profileImage} alt='Profile'/>
                <h1>Vinicius Nattan</h1>
                <h2>FullStack Developer</h2>
            </div>
            <div className="ContactInfo">
                <div className="ContactLinks">
                    <h1>[Contact]</h1>
                    <div className="iconsContainer">
                        <a href="https://www.linkedin.com/in/viniciusnattan/" target="_blank" rel="noreferrer">
                            <AiOutlineLinkedin/>
                        </a>
                        <a href="https://github.com/vnsl" target="_blank" rel="noreferrer">
                            <BsGithub/>
                        </a>
                        <a href="https://github.com/vnsl" target="_blank" rel="noreferrer">
                            <BsInstagram/>
                        </a>
                        <a href="https://github.com/vnsl" target="_blank" rel="noreferrer">
                            <BsTwitter/>
                        </a>
                        <a href="mailto:viniciusnattan@hotmail.com" target="_blank" rel="noreferrer">
                            <AiOutlineMail/>
                        </a>
                    </div>
                </div>
                <div className="ContactSeparator"></div>
                <div className="ContactLinks">
                    <h1>[Technologies]</h1>
                    <div className="iconsContainer">
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaHtml5/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaCss3Alt/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaSass/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <SiJavascript/> 
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaReact/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaAngular/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <FaNodeJs/>
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <SiPostgresql/>
                        </a>
                    </div>
                </div>
            </div>
            <img className="triangle" src={Polygon} alt="sdad" />
        </div>

    )
}

export default Contact;