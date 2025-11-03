import React from "react";
import projects from "./proj-data";
import './projects.css';
import Card from "../card/card";

function Projects() {
    
    return(
        <div className="projects">
            {projects.map((project, index) =>(
                <Card name={project.name} picture={project.picture} 
                description={project.description} link={project.link} key={index} />
            ))}
        </div>
    );
}

export default Projects;