import React from "react"
import { BlogConfig } from "../../Configs/BlogConfig"
import BlogCard from "../BlogCard/BlogCard"

const Blogs = () => {
    return (
        <section id="blogs">
            <h1 className="title fw-bolder text-center mb-4">blogs</h1>
            <div className="me-0 d-flex justify-content-center">
                <div className="blog-info row">
                    {BlogConfig.map((blogData) => (
                        <BlogCard blogData={blogData} key={blogData._id} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blogs
