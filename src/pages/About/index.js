import React from "react";

import Polygon from '../../assets/images/polygon.svg';

import './index.scss';

function About() {
    return (
        <div className="About">
            <div className="aboutImg"></div>
            <div className="aboutText">
                <h1>[ About ]</h1>
                <p>I am 29 yo and started coding on my Biotechnology degree, when I focused on Bioinfomatics and joined a Msc working with RNASeq. Programming was in my life for most part of it, with that in mind I went for web development joining Cubos Academy course, which led me to Ford Motor Company. By now my skills are focused on React and Angular as front end frameworks and nodeJs for back end , programming in JavaScript and TypeScript. Team work, organization, time management and communication are my main soft skills. More information can be seen on my CV below.</p>
                <button>[ View CV ]</button>
            </div>
            {/* <Polygon className="triangle"/> */}
            <img className="triangle" src={Polygon} alt="sdad" />
        </div>
    )
}

export default About;