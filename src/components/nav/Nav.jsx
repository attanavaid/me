import React from "react"
import "./nav.css"
import {TiHome} from "react-icons/ti"
import {AiOutlineUser} from "react-icons/ai"
import {MdWork} from "react-icons/md"
import {FaTools} from "react-icons/fa"
import {AiOutlineMessage} from "react-icons/ai"
import {useState} from "react"

const Nav = () => {
    const [activeNav, setActiveNav] = useState("#")
    return (
        <nav>
            <a href = "#" className = {activeNav === "#" ? "active" : ""} onClick = {() => setActiveNav("#")}>
                <TiHome/>
            </a>

            <a href = "#about" className = {activeNav === "#about" ? "active" : ""} onClick = {() => setActiveNav("#about")}>
                <AiOutlineUser/>
            </a>

            <a href = "#work" className = {activeNav === "#work" ? "active" : ""} onClick = {() => setActiveNav("#work")}>
                <MdWork/>
            </a>

            <a href = "#projects" className = {activeNav === "#projects" ? "active" : ""} onClick = {() => setActiveNav("#projects")}>
                <FaTools/>
            </a>

            <a href = "#contact" className = {activeNav === "#contact" ? "active" : ""} onClick = {() => setActiveNav("#contact")}>
                <AiOutlineMessage/>
            </a>
        </nav>
    )
}

export default Nav