import React from "react"
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import About from "./components/about/About"
import Work from "./components/work/Work"
import Education from "./components/education/Education"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import Languages from "./components/languages/Languages"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Portfolio from "./components/portfolio/Portfolio"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

const App = () => {
    return (
        <>
            <Header/>
            <Nav/>
            <About/>
            <Work/>
            <Education/>
            <Skills/>
            <Projects/>
            <Languages/>
            <Contact/>
            <Footer/>
        </>
    )
}

export default App