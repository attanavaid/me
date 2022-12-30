import React from "react"
import {BsLinkedin} from "react-icons/bs"
import {GrGithub} from "react-icons/gr"
import {FiDribbble} from "react-icons/fi"
import {FaArtstation} from "react-icons/fa"

const HeaderSocials = () => {
    return (
        <div className = "header__socials">
            <a href = "https://www.linkedin.com/in/attanavaid/" target = "_blank">
                <BsLinkedin size = "2rem"/>
            </a>

            <a href = "https://github.com/attanavaid" target = "_blank">
                <GrGithub size = "2rem"/>
            </a>

            <a href = "https://www.dribbble.com/attanavaid" target = "_blank">
                <FiDribbble size = "2rem"/>
            </a>

            <a href = "https://www.artstation.com/modelsbyat" target = "_blank">
                <FaArtstation size = "2rem"/>
            </a>
        </div>
    )
}

export default HeaderSocials