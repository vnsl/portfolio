import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

import './index.scss';

function Portfolio() {
    return (
        <div className="Portfolio">
            <div className="Intro">
                <h1>Portfolio </h1>
            </div>
            <div className="Projects"> 
                <ProjectLayout></ProjectLayout>
            </div>
        </div>
    )
}

export default Portfolio;