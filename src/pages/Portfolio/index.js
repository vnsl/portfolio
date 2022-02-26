import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

import './index.scss';

function Portfolio() {
    return (
        <div className="Portfolio">
            <div className="Intro">
                <h1>Portfolio </h1>
            </div>
            <ProjectLayout></ProjectLayout>
            <ProjectLayout></ProjectLayout>
            <ProjectLayout></ProjectLayout>
        </div>
    )
}

export default Portfolio;