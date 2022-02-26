import React from "react";
import profileImage from '../../assets/images/profile.jpg';

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
            <div className="ContactTech">
                <h1>Technologies</h1>
                <div className="iconsContainer iconsContainerTech">
                    <FaHtml5/>
                    <FaCss3Alt/>
                    <FaSass/>
                    <SiJavascript/>
                    <FaReact/>
                    <FaAngular/>
                    <FaNodeJs/>
                    <SiPostgresql/>
                </div>
            </div>
        </div>

    )
}

export default Contact;