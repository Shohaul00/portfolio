import {
    faFacebookMessenger,
    faRProject,
} from "@fortawesome/free-brands-svg-icons"
import {
    faBlog,
    faDownload,
    faHome,
    faPollH,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-scroll"

const Navigation = () => {
    return (
        <Navbar
            sticky="top"
            style={{ background: "black" }}
            variant="dark"
            expand="lg"
        >
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="my-0, mx-auto">
                    <button className="nav-btn">
                        <Link
                            spy={true}
                            smooth={true}
                            duration={1}
                            offset={-100}
                            to="header"
                            activeClass="active-nav-btn"
                        >
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                    </button>
                    <button className="nav-btn">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1}
                            to="projects"
                            activeClass="active-nav-btn"
                        >
                            <FontAwesomeIcon icon={faRProject} /> Projects
                        </Link>
                    </button>
                    <button className="nav-btn">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1}
                            to="digitalCV"
                            activeClass="active-nav-btn"
                        >
                            <FontAwesomeIcon icon={faPollH} /> Digital CV
                        </Link>
                    </button>

                    <button className="nav-btn">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-87}
                            duration={1}
                            to="blogs"
                            activeClass="active-nav-btn"
                        >
                            <FontAwesomeIcon icon={faBlog} /> Blogs
                        </Link>
                    </button>
                    <button className="nav-btn">
                        <Link
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={1}
                            to="contact"
                            activeClass="active-nav-btn"
                        >
                            <FontAwesomeIcon icon={faFacebookMessenger} />{" "}
                            Contact
                        </Link>
                    </button>
                    <a
                        href="https://drive.google.com/uc?id=1gjX98gEyHB4AO9l0uC2H4tDZL1zyCD_u&export=download"
                        className="download-resume-btn d-block text-center"
                    >
                        <FontAwesomeIcon icon={faDownload} /> RESUME
                    </a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
