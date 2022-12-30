import React, {useContext, useState} from "react"
import "./education.css"
import { MdLocationOn, MdMoreHoriz} from "react-icons/md"
import Tooltip from "@material-ui/core/Tooltip"
import {educationData} from "../../data/educationData"
import ThemeContext from "../Theme"
  
const Education = () => {
    const { dark } = useContext(ThemeContext);
    const [max, setMax] = useState(4);

    return (
        <section id = "education">
            <h5>&nbsp;</h5>
            <h2>
                Education
            </h2>

            <div className = "container education__container">
                <div className = "flex">
                    <div className = "w-1 bg-gray-500 rounded-full md:ml-6"></div>
                    <div className = "-ml-2">
                        {educationData.map((node, index) => {
                            if (index >= max) return null;
                            return (
                                <div key = {index} className = "py-4 flex wow fadeInDown" style = {{ animationDuration: `${index * 200 + 500}ms` }} id = "educationBox">
                                    <Tooltip title = {`${index + 1}`} placement = "left">
                                        <div className = {`educationDot relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 ${ dark ? "bg-white" : "bg-primary-500"} duration-200`}>
                                        </div>
                                    </Tooltip>

                                    <div className = "ml-8">
                                        <img src = {`${node.icon}`} alt = {node.title} className = "w-auto h-8 object-contain"/>
                                        <div className = "mt-3 items-baseline">
                                            <h6 className = "font-semibold">
                                                {node.title}
                                            </h6>
                                            <h6 className = "text-xs mb-2">
                                                ({node.period})
                                            </h6>
                                        </div>

                                        <h6 className = "text-sm">
                                            {node.subtitle}
                                        </h6>

                                        <h6 className = "text-xs mt-4 font-semibold">
                                            Cumulative GPA: {node.cgpa} 
                                        </h6>

                                        <h6 className = "text-xs font-semibold">
                                            Honors/Awards: {node.honors}
                                        </h6>

                                        <div className = "mt-3 flex items-center">
                                            <MdLocationOn size = "0.95rem"/>
                                            <h6 className = "font-semibold text-xs ml-2">
                                                {node.location}
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {max <= 4 && (
                    <div className = "ml-12 mt-4 rounded-lg py-2 flex">
                        <Tooltip title = "Show More" placement = "right">
                            <div onClick = {() => setMax(10)}>
                                <MdMoreHoriz size = "1.5rem"/>
                            </div>
                        </Tooltip>
                    </div>
                )}

            </div>
        </section>
    )
}

export default Education