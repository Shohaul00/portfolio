import React from "react"
import { ProjectConfig } from "../../Configs/ProjectConfig"
import ProjectCard from "../ProjectCard/ProjectCard"

const Projects = () => {
    return (
        <section id="projects">
            <h1 className="title text-center fw-bolder mb-3 pt-5">projects</h1>
            <div className="projects-flex-box">
                {ProjectConfig.map((projectData) => (
                    <ProjectCard projectData={projectData} />
                ))}
            </div>
        </section>
    )
}

export default Projects
