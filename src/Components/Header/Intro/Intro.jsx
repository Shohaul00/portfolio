import { faMouse } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useSpring } from "@react-spring/core"
import { animated } from "@react-spring/web"
import React from "react"
import FacebookLogo from "../../../Icons/facebook.png"
import GithubLogo from "../../../Icons/github.png"
import LinkedInLogo from "../../../Icons/linkedin.png"
import TwitterLogo from "../../../Icons/twitter.png"
import "./Intro.scss"

const Intro = () => {
    const props = useSpring({
        to: { opacity: 1, marginTop: 0 },
        from: { opacity: 0, marginTop: -500 },
    })
    return (
        <animated.section
            style={props}
            className="d-flex intro flex-column justify-content-center align-items-center"
        >
            <img
                src="https://bolby-react.vercel.app/images/avatar-1.svg"
                alt=""
            />
            <h1 className="title floating fw-bolder mb-3 mt-3">
                Shihab Shohaul
            </h1>
            <p style={{backgroundColor:"hsla(0, 0%, 40%, 0.548)", padding: "3px 10px", borderRadius: "5px"}}>I'm a Front-End Developer</p>
            <div className="social-container">
                <a
                    href="https://www.facebook.com/shihab.shohaul.00/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="facebook-icon icon"
                        src={FacebookLogo}
                        alt="facebook"
                    />
                </a>
                <a
                    href="https://github.com/Shohaul00"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="github-icon icon"
                        src={GithubLogo}
                        alt="github"
                    />
                </a>
                <a
                    href="https://twitter.com/Shohaul00"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="twitter-icon icon"
                        src={TwitterLogo}
                        alt="twitter"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/shohaul00/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        className="linkedIn-icon icon"
                        src={LinkedInLogo}
                        alt="linkedIn"
                    />
                </a>
            </div>
            <a href="#contact" className="main-btn mt-5">
                Hire Me
            </a>
            <div
                style={{
                    position: "relative",
                    top: "20vh",
                    textAlign: "center",
                }}
            >
                <p>
                    <FontAwesomeIcon icon={faMouse} size="2x" />
                </p>
                <small>Scoll Down</small>
            </div>
        </animated.section>
    )
}

export default Intro
