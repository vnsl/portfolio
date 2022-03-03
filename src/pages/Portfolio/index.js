import React from "react";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../assets/data/projects.json";

import { FiFilter } from "react-icons/fi";

import './index.scss';

function Portfolio() {
    const allProjects = projects.projects;

    return (
        <div className="Portfolio">
            <div className="PortfolioHeader">
                <h1>[Projects]</h1>
                <FiFilter/>
                {/* <p>Filter</p> */}
            </div>
            <div className="projectCards">
                {allProjects.map(project => <ProjectCard project={project}/>)}
            </div>
        </div>
    )
}

export default Portfolio;