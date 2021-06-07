import React from "react"
import Blogs from "../Blogs/Blogs"
import Contact from "../Contact/Contact"
import DigitalCV from "../DigitalCV/DigitalCV"
import Footer from "../Footer/Footer"
import Header from "../Header/Header/Header"
import Projects from "../Projects/Projects"

const Home = () => {
  return (
    <>
      <Header />
      <div style={{ background: "#000" }}>
        <Projects />
        <DigitalCV />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home
