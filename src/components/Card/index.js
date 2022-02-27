import React from "react";

import img from "../../assets/images/background1.JPG"

import './index.scss';

function Card() {
    return (
        <div className='Card'>
           <img className="img1" src={img} alt="hey" />
           <img className="img2" src={img} alt="hey" />
           <img className="img3" src={img} alt="hey" />
        </div>
    )
}

export default Card;