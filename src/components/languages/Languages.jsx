import React, { useState } from "react"
import "./languages.css"
import Typist from "react-typist";
import { FaSignLanguage } from "react-icons/fa"
import { languagesData } from "../../data/languagesData"
import ThemeContext from "../Theme"
  
const Languages = () => {
    const [typistIndex, setTypistIndex] = useState(0);

    return (
        <section id = "languages">
            <h5>&nbsp;</h5>
            <h2>
                Languages
            </h2>

            <div className = "container languages__container">
                <div className = "h-48 md:h-40 lg:h-32 wow fadeIn">
                    <Typist key = {typistIndex} avgTypingDelay = {40} cursor = {{show: false}} onTypingDone = {() => setTypistIndex(typistIndex + 1)}>
                        {languagesData.map((node, index) => {
                            return (
                                <div key = {index}>
                                    <h2 className = "text-4xl pb-2">
                                        {node.text}
                                    </h2>
                                    <span className = "italic font-thin">
                                        {node.translation}
                                    </span>
                                    <Typist.Backspace count = {node.text.length + node.translation.length} delay = {2000}/>
                                    <Typist.Delay ms = {300}/>
                                </div>
                            );
                        })}
                    </Typist>
                </div>
            

                <div className = "languageBox mt-12 flex flex-wrap">
                    <ol className = "text-xl">
                        Languages I speak:
                        {languagesData.map((node, index) => {
                            return (
                                <li key = {index} className = "language text-xl ml-8">
                                    {index + 1}. <strong id = "languageText">{node.language}</strong> <i id = "langLevel">({node.level})</i>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            </div>
        </section>
    )
}

export default Languages