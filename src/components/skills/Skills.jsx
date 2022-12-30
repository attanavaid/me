import React, {useState, useRef} from "react"
import "./skills.css"
import {skillsData} from "../../data/skillsData"
import {RiArrowRightSLine} from "react-icons/ri"
  
const Skills = () => {
    return (
        <section id = "skills">
            <h5>&nbsp;</h5>
            <h2>
                Skills
            </h2>

            <div className = "grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 container skills__container">
                {skillsData.map((node, index) => (
                    <div key = {index} className = "md:mr-5 wow fadeIn" style = {{animationDelay: `${index * 100 + 100}ms`}} id = "skillbox">
                        <div className = "flex items-center">
                            <img src = {`${node.icon}`} alt = {node.title} className = "w-5 h-5 mr-5" key = {index}/>
                            <div>
                                <h6 className = "text-ml font-semibold leading-none">
                                    {node.name}
                                </h6>
                                <h6 className = "techHeader mt-2 leading-none">
                                    Softwares:
                                    <p className = "pb-2 text-xs">
                                        {node.tech.map((t, i) => (
                                            <span key = {t} className = "ml-2">
                                                {i + 1}.&nbsp;{t}<br/>
                                            </span>
                                        ))}
                                    </p>
                                </h6>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills