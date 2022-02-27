import React from 'react';

import './index.scss'

export default function DetailedCard(projectInfo) {
    return (
        <div className='DetailedCard'>
            <div className='DetailedInfo'>
                <div>
                    <h2>Project Description:</h2>
                    <p>{projectInfo.description}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, modi? Laudantium ipsum, ullam magnam odit velit possimus, nesciunt consectetur doloribus dolorum cupiditate ea at error provident temporibus eveniet numquam rem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates quisquam sunt totam sequi corrupti vel voluptate et voluptatum nesciunt ipsum! Voluptatem corporis fugiat, sint dignissimos non ipsa impedit repellat facilis?</p>
                </div>

                <div>
                    <h2>Links:</h2>
                    {/* <a href="http://" target="_blank" rel="noopener noreferrer">{projectInfo.links.github}</a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">{projectInfo.links.website}</a> */}
                </div>

                <div>
                    <h2>Technology:</h2>

                </div>
            </div>
        </div>
    )
}