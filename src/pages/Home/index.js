import React from "react";

import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';

import './index.scss';

function Home() {
    return (
        <div className="homeContainer">
                <p>"Hey there, My name is Vinicius, I am a full stack developer. Passionate about programming and making things rational and logical."</p>
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