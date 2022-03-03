import React from "react";
import ProjectCard from "../../components/ProjectCard";
import projects from "../../assets/data/projects.json";

import './index.scss';

function Portfolio() {
    const allProjects = projects.projects;

    console.log(allProjects)
    return (
        <div className="Portfolio">
            <h1>[Projects]</h1>
            <div className="projectCards">
                {allProjects.map(project => <ProjectCard project={project}/>)}

            </div>
           {/* <ProjectCard project={}/> */}
        </div>
    )
}

export default Portfolio;