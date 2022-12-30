import React, {useContext} from "react"
import "./work.css"
import {MdLocationOn} from "react-icons/md"
import "swiper/css"
import "swiper/css/pagination"
import Tooltip from "@material-ui/core/Tooltip"
import {workData} from "../../data/workData"
import ThemeContext from "../Theme"
  
const Work = () => {
    const { dark } = useContext(ThemeContext);

    return (
        <section id = "work">
            <h5>&nbsp;</h5>
            <h2>
                Work Experience
            </h2>

            <div className = "container work__container">
                <div className = "flex">
                    <div className = "w-1 bg-gray-500 rounded-full md:ml-6"></div>
                    <div className = "-ml-2">
                        {workData.map((node, index) => {
                            return (
                                <div key = {index} className = "py-4 flex wow fadeInDown" style = {{ animationDuration: `${index * 200 + 500}ms` }} id = "workBox">
                                    <Tooltip title = {`${index + 1}`} placement = "left">
                                        <div className = {`workDot relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 ${ dark ? "bg-white" : "bg-primary-500"} duration-200`}>
                                        </div>
                                    </Tooltip>

                                    <div className = "ml-8">
                                        <img src = {`${node.icon}`} alt = {node.title} className = "w-auto h-8 object-contain"/>
                                        <div className = "mt-3 flex items-baseline">
                                            <h6 className = "font-semibold">
                                                {node.title}
                                            </h6>
                                            <h6 className = "text-xs ml-2">
                                                ({node.period})
                                            </h6>
                                        </div>

                                        <h6 className = "text-sm">
                                            {node.subtitle}
                                        </h6>

                                        <h6 className = "text-xs mt-3 mb-3">
                                            {node.description}
                                        </h6>

                                        <div className = "mt-2 flex items-center">
                                            <MdLocationOn size = "0.95rem"/>
                                            <h6 className = "font-semibold text-xs ml-2">
                                                {node.location}
                                            </h6>
                                        </div>
                                        
                                        <h6 className = "text-xs mt-2">
                                            <strong>Specialization:</strong> {node.specialization}
                                        </h6>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Work