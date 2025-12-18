import React from "react";
import "./about.css";
import ME from "../../assets/about/about.png";
import resumePrview from "../../assets/resume/preview.png";
import Resume from "../../assets/resume/Resume.pdf";
import CTA from "./CTA";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { BiLinkExternal } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>&nbsp;</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="flex flex-col items-center">
          <div className="about__me">
            <div className="about__me-image">
              <img
                src={ME}
                alt="Atta Navaid, a professional developer and designer"
                loading="lazy"
              />
            </div>
          </div>
          <div className="resume__preview">
            <div className="resume__preview-image">
              <a
                href={Resume}
                download
                className="hoverResume rounded-lg shadow-lg"
                aria-label="Download Atta Navaid's resume (PDF)"
              >
                <BiLinkExternal
                  size="0.75rem"
                  id="LinkIcon"
                  aria-hidden="true"
                />
                <img
                  src={resumePrview}
                  alt="Preview of Atta Navaid's resume"
                  className="resumeImage overflow-hidden w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Work Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>~15 Completed</small>
            </article>
          </div>

          <p>Hello there!</p>

          <p>
            I'm Atta Navaid, and I consider myself a designer, developer, 3D
            artist and an editor. This website was made to showcase all of the
            work that I have published in the professional workspace.
          </p>

          <p>
            I got into development because I believe being able to program code
            is an ability people will need to survive in the future. The fact
            that almost everything in this world can be programmed to do
            anything you want is fascinating to me. My desire to become a
            developer came from playing games during my childhood and
            interacting with unique websites everyday.
          </p>

          <p>
            I got into 3D modelling, texturing, and designing, because of my
            aspiration to learn game development and hopefully create my own
            game or be involved in a team that aims to create a great game.
            Since I played a lot of games that brought me joy, I wanted others
            to feel the same way the developers of those games made me feel.
          </p>

          <p>
            I got into designing because I like to make sure my designs, are
            exactly the way I want them. Plus, being able to make digital artist
            is a big win in the current online world. So, I tried taught myself
            about art and design using the biggest program at the time, which
            was Adobe.
          </p>

          <p>
            I created this portfolio so I could showcase all that I have to
            offer and make it simpler for you to understand my capabilities and
            connect with me easily. If you like what you see, click the contact
            button below and shoot me a message. I would love to hear from you!
          </p>

          <CTA className="items-start" />
        </div>
      </div>
    </section>
  );
};

export default About;
