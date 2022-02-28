import React from "react";

import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

import './index.scss';

function Home() {
    return (
        <div className="homeContainer">
                <p>"Hey There, I am a FullStack Developer. I am currently working for Ford Motor Company. I am always trying to learn everything that I can and challenging myself to reach higher goals."</p>
                <div className="HomeIcons">
                    <a href="https://github.com/vnsl" target="_blank" rel="noreferrer">
                        <BsGithub/>
                    </a>
                    <a href="https://www.linkedin.com/in/viniciusnattan/" target="_blank" rel="noreferrer">
                        <AiOutlineLinkedin/>
                    </a>
                    <a href="mailto:viniciusnattan@hotmail.com" target="_blank" rel="noreferrer">
                        <AiOutlineMail/>
                    </a>
                </div>
            
                   
        </div>

    )
}

export default Home;