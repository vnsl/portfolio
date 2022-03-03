import React from "react";
import CustomModal from "../CustomModal";

import './index.scss';

function ProjectCard({project}) {

  return (
    <div className="ProjectCard" >
        <h1>{project.Title}</h1>
        <CustomModal project={project}></CustomModal>
    </div>
  )
}

export default ProjectCard;