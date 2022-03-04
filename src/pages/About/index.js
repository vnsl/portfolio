import React from "react";

import Polygon from '../../assets/images/polygon.svg';

import './index.scss';

function About() {
    return (
        <div className="About">
            <div className="aboutImg"></div>
            <div className="aboutText">
                <h1>[About]</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis feugiat lacus sed cursus. Phasellus vel tempor tortor. Quisque tempus egestas erat id ullamcorper. Sed semper, enim quis tincidunt maximus, neque ipsum venenatis urna, non commodo erat quam vel leo. Sed congue et nisi non dignissim. Donec euismod vehicula elit. Mauris vehicula fermentum pharetra. Quisque sed tristique enim. Duis quis nibh vitae sem fringilla efficitur. Praesent feugiat lacus faucibus aliquet consectetur. Cras imperdiet dapibus quam, id dictum quam condimentum non. Aenean tincidunt ante vitae condimentum congue. Nunc id ligula nibh. Morbi ac elit egestas turpis eleifend luctus. </p>
                <button>[View CV]</button>
            </div>
            {/* <Polygon className="triangle"/> */}
            <img className="triangle" src={Polygon} alt="sdad" />
        </div>
    )
}

export default About;