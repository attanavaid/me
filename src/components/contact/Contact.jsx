import React, {useRef, useEffect, useState} from "react"
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {FaDiscord} from "react-icons/fa"
import {AiOutlineWhatsApp} from "react-icons/ai"
import {IoMdPaperPlane} from "react-icons/io"
import emailjs from "emailjs-com"
import "reactjs-popup/dist/index.css"

//EmailJS Tutorial: https://github.com/ChisomUma/EmailJs-tutorial
//                  https://blog.openreplay.com/sending-emails-from-react-with-emailjs

const Contact = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        message: ""
    });

    const form = useRef();
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send("service_attanavaid", "template_rq32hnm", values, "cm9s87x8hMN9PRQiP")
        .then(response => {
            console.log("SUCCESS!", response);
            setValues({
                name: "",
                email: "",
                message: ""
            });
            setStatus("SUCCESS");
        }, error => {
            console.log("FAILED...", error);
        });
    }

    useEffect(() => {
        if(status === "SUCCESS") {
            setTimeout(() => {
                setStatus("");
            }, 3000);
        }
    }, [status]);

    const handleChange = (e) => {
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }))
    }
    
    return (
        <section id = "contact">
            <h5>&nbsp;</h5>
            <h2>
                Contact Me
            </h2>

            <div className = "container contact__container">
                <div className = "contact__options">
                    <article className = "contact__option">
                        <MdOutlineMail className = "contact__option-icon"/>
                        <h4>
                            Email
                        </h4>
                        <h5 className = "text-light">
                            attanavaid@gmail.com
                        </h5>
                        <a href = "mailto:attanavaid@gmail.com" target = "_blank">
                            Send an Email
                        </a>
                    </article>

                    <article className = "contact__option">
                        <FaDiscord className = "contact__option-icon"/>
                        <h4>
                            Discord
                        </h4>
                        <h5 className = "text-light">
                            AT#1729
                        </h5>
                        <a href = "https://discordapp.com/users/302309055672614922" target = "_blank">
                            Send a Message
                        </a>
                    </article>

                    <article className = "contact__option">
                        <AiOutlineWhatsApp className = "contact__option-icon"/>
                        <h4>
                            WhatsApp
                        </h4>
                        <h5 className = "text-light">
                            +1 667-345-4340
                        </h5>
                        <a href = "https://api.whatsapp.com/send?phone=6673454340" target = "_blank">
                            Send a Message
                        </a>
                    </article>
                </div>

                <form ref = {form} onSubmit = {handleSubmit}>
                    {status && successMessage()}
                    <input value = {values.name} onChange = {handleChange} type = "text" name = "name" placeholder = "Name" className = "formItem" required/>
                    <input value = {values.email} onChange = {handleChange} type = "email" name = "email" placeholder = "Email" className = "formItem" required/>
                    <textarea value = {values.message} onChange = {handleChange} name = "message" rows = "7" placeholder = "Message" className = "formItem" required/>
                    <button href = "#contact" type = "submit" value = "Send" className = "btn btn-light">
                        Send Message
                        <IoMdPaperPlane size = "1rem" className = "mt-1.5 ml-2"/>
                    </button>
                </form>
            </div>
        </section>
    )
}

const successMessage = () => (
    <div className = "px-4 py-3 mb-5" id = "successMsg">
        <p>
            Your message was successfully sent to attanavaid@gmail.com
        </p>
    </div>
)

export default Contact