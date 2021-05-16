import React from "react"
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="site-footer text-secondary">
            <div className="container">
                <hr></hr>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">
                            Copyright &copy; {new Date().getFullYear()} All
                            Rights Reserved by Shihab Shohaul
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li>
                                <a
                                    className="facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.facebook.com/shihab.shohaul.00/"
                                >
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="twitter"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://twitter.com/Shohaul00"
                                >
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dribbble"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://dribbble.com/"
                                >
                                    <i className="fa fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    className="linkedin"
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/shihab-shohaul-25368520a/"
                                >
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
