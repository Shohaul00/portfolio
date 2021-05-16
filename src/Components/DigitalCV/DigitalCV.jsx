import { faHeartbeat } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const DigitalCV = () => {
    return (
        <section id="digitalCV">
            <h1 className="title text-center fw-bolder">SKILLS</h1>
            <div className="about-me-card d-flex justify-content-center">
                {/* <p>
                    I am Shihab Shohaul, Front-End Web Developer From Dhaka,
                    Bangladesh. I have rich experience in Web Development With
                    React JS. I'm Also Good at Communication & Leadership.
                </p> */}
            </div>
            <div className="container digital-cv-container mt-4 text-dark">
                <div className="row">
                    <div className="col-md-4 mt-4">
                        <div className="card card-1">
                            <h3>REDUX JS</h3>
                            <p>
                                I'm Skilled In State Management in React With
                                Redux JS. I Know Redux Toolkit & Redux Devtools{" "}
                                <FontAwesomeIcon
                                    style={{ color: "red" }}
                                    icon={faHeartbeat}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-2">
                            <h3>REACT JS</h3>
                            <p>
                                I'm a React JS Developer and I'm Developing Web Apps Mostly Using React JS. I Know Context API, Hooks.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-1">
                            <h3>React Native</h3>
                            <p>
                                I've Experience working with React Native with Expo Environment. I'd love to Work on a Native Project.
                                <FontAwesomeIcon
                                    style={{ color: "red" }}
                                    icon={faHeartbeat}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-3">
                            <h3>MATERIAL UI</h3>
                            <p>
                                I Use Material UI as a Component Styling Framework with React Applications.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-1">
                            <h3>BOOTSTRAP</h3>
                            <p>
                                I'm Skilled In Styling Websites using Bootstrap. I Implemented it In React Using React Bootstrap.
                                <FontAwesomeIcon
                                    style={{ color: "red" }}
                                    icon={faHeartbeat}
                                />
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mt-4">
                        <div className="card card-3">
                            <h3>STYLED & SCSS</h3>
                            <p>
                                I'm Skilled In CSS pre-proccessor. I Use Scss & styled components on React Projects.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default DigitalCV
