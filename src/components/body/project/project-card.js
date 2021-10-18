import React from "react";
import './project-card.css';

function ProjectCard ({project}){
    return (
        <div className="project-card">
            <div className="project-info">
                <label className="project-title">{project.title}</label>
                <div className="project-links">
                    {project.demo&& (
                        <a className="project-link" href={project.demo}>
                            <div className="link-button">
                                <i class="fi-rr-globe"/>Demo
                            </div>
                        </a>
                    )}
                </div>
            </div>
            <img src={project.image} className="project-photo" alt=""/>

        </div>
    );

}

export default ProjectCard;
