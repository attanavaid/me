import React from "react"
import Resume from "../../assets/resume/Resume.pdf"
import {AiOutlineDownload} from "react-icons/ai"

const CTA = () => {
    return (
        <div className = "cta">
            <a href = {Resume} download className = "btn-outline">
                Download Resume
                <AiOutlineDownload size = "1rem" className = "mt-1.5 ml-2"/>
            </a>

            <a href = "#contact" className = "btn btn-primary">
                Contact Me
            </a>
        </div>
    )
}

export default CTA