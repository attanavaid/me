import React from "react"
import "./header.css"
import CTA from "./CTA"
import ME from "../../assets/header/standing.png"
import HeaderSocials from "./HeaderSocials"
import Typed from "react-typed"

const Header = () => {            
    return (
        <header>
            <div className = "container header__container">
                <div className = "introCard mb-4 flex flex-col">
                        <h5 id = "introText">
                            Hello, I'm Atta Navaid
                        </h5>

                        <Typed
                            strings = {["Web Developer", "Front-End Developer", "Back-End Developer", "3D Artist", "Fullstack Developer"]}
                            typeSpeed = {40}
                            backSpeed = {50}
                            className = "typedText text-light font-semibold"
                            loop/>

                    <CTA className = "items-start"/>
                </div>
                <div>
                    <HeaderSocials/>
                    <div className = "me">
                        <img src = {ME} alt = "Me"/>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header