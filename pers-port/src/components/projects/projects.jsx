import React from "react";
import projects from "./proj-data";
import './projects.css';

function Projects() {
    
    return(
        <div className="projects">
            {projects.map((project, index) =>(
                <div className="card" key={index}>
                    <h1>{project.name}</h1>
                    <div className="proj-pic">
                        <img src={project.picture} alt={project.name}/>
                    </div>
                    <h2>{project.description}</h2>
                    <div className="btn-container">
                        <button><a href={project.link}>View Repository</a></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;