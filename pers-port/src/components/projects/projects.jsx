import React from "react";
import { projects } from "./proj-data";
import "./projects.css";

function Projects() {
    
    return(
        <div className="projects">
            {projects.map((project, index) =>(
                <div className="card">
                    
                </div>
            ))}
        </div>
    );
}