import { faHeart, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Contact = () => {
    return (
        <div id="contact">
            <div className="contact-section container text-white">
                <div className="row">
                    <p className="text-center h1 title fw-bold">
                        <FontAwesomeIcon
                            className="main-text"
                            icon={faPhoneSquareAlt}
                        />{" "}
                        SEND <span className="highlight">YOUR</span> MESSAGE
                    </p>
                </div>
                <div className="row">
                    <p className="text-center h5 title fw-bold mt-1">
                        I'D LOVE TO HEAR FROM YOU{" "}
                        <FontAwesomeIcon
                            style={{ color: "red" }}
                            icon={faHeart}
                        />{" "}
                        !
                    </p>
                </div>
                <div className="row input-container">
                    <form
                        action="https://formsubmit.co/2b29bb1b4180b95e0b5e52ceb1643038"
                        method="POST"
                    >
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <input type="email" name="email" required />
                                <label>Email</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <div className="styled-input wide">
                                <textarea name="message" required></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <button
                                type="submit"
                                className="btn-lrg submit-btn"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
