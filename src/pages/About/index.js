import React from "react";

import './index.scss';

function About() {
    return (
        <div className="About">
            <h1>About</h1>
            <div className="AboutContainer">
                <div className="aboutImg"></div>
                <div className="aboutText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis feugiat lacus sed cursus. Phasellus vel tempor tortor. Quisque tempus egestas erat id ullamcorper. Sed semper, enim quis tincidunt maximus, neque ipsum venenatis urna, non commodo erat quam vel leo. Sed congue et nisi non dignissim. Donec euismod vehicula elit. Mauris vehicula fermentum pharetra. Quisque sed tristique enim. Duis quis nibh vitae sem fringilla efficitur. Praesent feugiat lacus faucibus aliquet consectetur. Cras imperdiet dapibus quam, id dictum quam condimentum non. Aenean tincidunt ante vitae condimentum congue. Nunc id ligula nibh. Morbi ac elit egestas turpis eleifend luctus. </p>
                    <button>View CV</button>
                </div>
            </div>
        </div>

    )
}

export default About;