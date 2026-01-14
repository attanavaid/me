import React, { useRef, useEffect, useState } from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";
import emailjs from "emailjs-com";
import "reactjs-popup/dist/index.css";

//EmailJS Tutorial: https://github.com/ChisomUma/EmailJs-tutorial
//                  https://blog.openreplay.com/sending-emails-from-react-with-emailjs

const successMessage = () => (
  <div className="px-4 py-3 mb-5" id="successMsg" role="status">
    <p>Your message was successfully sent to attanavaid@gmail.com</p>
  </div>
);

const errorMessage = () => (
  <div className="px-4 py-3 mb-5" id="errorMsg" role="alert">
    <p>
      Failed to send message. Please try again or contact directly via email.
    </p>
  </div>
);

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_attanavaid",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_rq32hnm",
        values,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "cm9s87x8hMN9PRQiP"
      )
      .then(
        (response) => {
          setValues({
            name: "",
            email: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          setStatus("ERROR");
          // Error handling for accessibility
          setTimeout(() => setStatus(""), 5000);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact">
      <h5>&nbsp;</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="text-light">attanavaid@gmail.com</h5>
            <a
              href="mailto:attanavaid@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send an email to attanavaid@gmail.com"
            >
              Send an Email
            </a>
          </article>

          <article className="contact__option">
            <FaDiscord className="contact__option-icon" />
            <h4>Discord</h4>
            <h5 className="text-light">Atta#1729</h5>
            <a
              href="https://discordapp.com/users/302309055672614922"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>

          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5 className="text-light">+1 667-345-4340</h5>
            <a
              href="https://api.whatsapp.com/send?phone=6673454340"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={handleSubmit} aria-label="Contact form">
          {status === "SUCCESS" && (
            <div role="alert" aria-live="polite">
              {successMessage()}
            </div>
          )}
          {status === "ERROR" && (
            <div role="alert" aria-live="assertive">
              {errorMessage()}
            </div>
          )}
          <label htmlFor="contact-name" className="sr-only">
            Your Name
          </label>
          <input
            id="contact-name"
            value={values.name}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Name"
            className="formItem"
            required
            aria-required="true"
            aria-label="Your name"
          />
          <label htmlFor="contact-email" className="sr-only">
            Your Email
          </label>
          <input
            id="contact-email"
            value={values.email}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            className="formItem"
            required
            aria-required="true"
            aria-label="Your email address"
          />
          <label htmlFor="contact-message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="contact-message"
            value={values.message}
            onChange={handleChange}
            name="message"
            rows="7"
            placeholder="Message"
            className="formItem"
            required
            aria-required="true"
            aria-label="Your message"
          />
          <button
            type="submit"
            className="btn btn-light"
            aria-label="Send message"
          >
            Send Message
            <IoMdPaperPlane
              size="1rem"
              className="mt-1.5 ml-2"
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
