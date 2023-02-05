import React, { useContext, useState } from "react"
import "./projects.css"
import { FaGithub, FaYoutube } from "react-icons/fa"
import { BiLinkExternal } from "react-icons/bi"
import { projectsData } from "../../data/projectsData"
import ThemeContext from "../Theme"
  
const Projects = () => {
    const { dark } = useContext(ThemeContext);
    const [max, setMax] = useState(4);

    return (
        <section id = "projects">
            <h5>&nbsp;</h5>
            <h2>
                Projects
            </h2>

            <div className = "container__mod projects__container">
                {projectsData.map((node, index) => (
                    <article className = "project__item">
                        <div key = {node.id} className = "rounded-lg flex flex-col wow fadeIn" style = {{ animationDelay: `${index * 300 + 300}ms` }}>
                            <a href = {node.github} target = "_blank" rel = "noopener noreferrer" className = "w-full h-48 bg-black flex-center relative cursor-pointer rounded-lg shadow-lg">
                                <BiLinkExternal id = "project__LinkIcon"/>
                                <img src = {`${node.image}`} alt = {node.title} className = "absolute overflow-hidden w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"/>
                            </a>

                            <span className = "sr-only">
                                {node.title}
                            </span>

                            <h5 className = "mt-4 font-semibold">
                                {node.title}
                            </h5>

                            <p className = "mt-2 pb-5 text-sm text-justify">
                                {node.description}
                            </p>

                            <p className = "pb-2 flex text-xs font-semibold">
                                {node.tags.map(x => (
                                    <span key = {x} className = "mr-2">
                                        #{x}
                                    </span>
                                ))}
                            </p>

                            <div className = "flex mt-2">
                                {node.website && (
                                    <a href = {node.website} target = "_blank" rel = "noopener noreferrer" className = "sm-btn btn-light px-2 mr-2 hover:text-primary-500">
                                        <BiLinkExternal size = "1rem" className = "sm-btn__icon"/>
                                        <p className = "sm-btn__text hidden">
                                            Demo
                                        </p>
                                    </a>
                                )}

                                {node.github && (
                                    <a href = {node.github} target = "_blank" rel = "noopener noreferrer" className = "sm-btn btn-light px-2 mr-2 hover:text-primary-500">
                                        <FaGithub size = "1rem" className = "sm-btn__icon"/>
                                        <p className = "sm-btn__text hidden">
                                            Github
                                        </p>
                                    </a>
                                )}

                                {node.video && (
                                    <a href = {node.video} target = "_blank" rel = "noopener noreferrer" className = "sm-btn btn-light px-2 mr-2 hover:text-primary-500">
                                        <FaYoutube size = "1rem" className = "sm-btn__icon"/>
                                        <p className = "sm-btn__text hidden">
                                            Video
                                        </p>
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className = "container__mod projects__container">
                <a href = "#contact" className = "btn btn-light" onClick = {() => window.open("https://github.com/attanavaid", "_blank")}>
                    <FaGithub size = "1.4rem" className = "mr-2 mt-0.5"/>
                    Explore my Github Page
                </a>
            </div>
        </section>
    )
}

export default Projects