import React from "react"
import {FiArrowDownCircle} from "react-icons/fi"

const CTA = () => {
    return (
        <div className = "cta">
            <a href = "#about" className = "btn btn-primary">
                Learn More
                <FiArrowDownCircle size = "1rem" className = "mt-1.5 ml-2"/>
            </a>
        </div>
    )
}

export default CTA