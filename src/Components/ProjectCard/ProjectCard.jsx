import React from "react"

const ProjectCard = ({ projectData }) => {
    return (
        <figure class="snip1139">
            <img src={projectData.imgURL} alt="sample17" />
            <blockquote>
                <p className="h3 title fw-bolder text-center mt-2">
                    {projectData.name}
                </p>
                <small
                    style={{ fontSize: "13px" }}
                    className="d-block text-center fw-bolder text-uppercase"
                >
                    {projectData.title}
                </small>
                <ul className="my-3">
                    {projectData.bulletPoints.map((point) => (
                        <li>{point.text}</li>
                    ))}
                </ul>
                <div className="text-center">
                    <a
                        href={projectData.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-dark text-decoration-none download-resume-btn fw-bolder"
                    >
                        {projectData.name}.git
                    </a>
                    <a
                        href={projectData.website}
                        className="main-btn mt-3 d-block"
                        target="_blank"
                        rel="noreferrer"
                    >
                        www.{projectData.name}.com
                    </a>
                </div>
            </blockquote>
        </figure>
    )
}

export default ProjectCard
