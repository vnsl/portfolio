import React from "react";
import './index.scss';

function Card({title, link}) {
    return (
        <div className='Card'>
            <p>{title}</p>
            <a href={link}>{link}</a>
        </div>
    )
}

export default Card;