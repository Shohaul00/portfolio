import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Card } from "react-bootstrap"

const BlogCard = ({ blogData }) => {
    return (
        <a
            href={blogData.contentLink}
            style={{ cursor: "pointer", textDecoration: "none" }}
            className="col-md-4 text-dark p-3"
            target="_blank"
            rel="noreferrer"
        >
            <img
                src={blogData.imgURL}
                style={{
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px",
                }}
                width="100%"
                alt=""
            />
            <Card
                className="p-4"
                style={{
                    border: "none",
                    borderRadius: "0",
                    borderBottomLeftRadius: "5px",
                    borderBottomRightRadius: "5px",
                }}
            >
                <p className="h5 text-center fw-bold">{blogData.title}</p>

                <div className="text-center mt-3">
                    <small>
                        <FontAwesomeIcon className="highlight" icon={faClock} />{" "}
                        {blogData.time} Read
                    </small>
                </div>
            </Card>
        </a>
    )
}

export default BlogCard
