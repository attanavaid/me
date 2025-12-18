import React from "react";
import "./nav.css";
import { TiHome } from "react-icons/ti";
import { AiOutlineUser } from "react-icons/ai";
import { MdWork } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  // Update active nav based on scroll position with throttling
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = [
            "#",
            "#about",
            "#experience-education",
            "#projects",
            "#contact",
          ];
          const scrollPosition = window.scrollY + 200;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.querySelector(
              sections[i] === "#" ? "header" : sections[i]
            );
            if (section && scrollPosition >= section.offsetTop) {
              setActiveNav(sections[i]);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav role="navigation" aria-label="Main navigation">
      <a
        href="#"
        className={activeNav === "#" ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        aria-label="Go to home section"
      >
        <TiHome aria-hidden="true" />
        <span className="sr-only">Home</span>
      </a>

      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#about");
          document
            .querySelector("#about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Go to about section"
      >
        <AiOutlineUser aria-hidden="true" />
        <span className="sr-only">About</span>
      </a>

      <a
        href="#experience-education"
        className={activeNav === "#experience-education" ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#experience-education");
          document
            .querySelector("#experience-education")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Go to experience and education section"
      >
        <MdWork aria-hidden="true" />
        <span className="sr-only">Experience & Education</span>
      </a>

      <a
        href="#projects"
        className={activeNav === "#projects" ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#projects");
          document
            .querySelector("#projects")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Go to projects section"
      >
        <FaTools aria-hidden="true" />
        <span className="sr-only">Projects</span>
      </a>

      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={(e) => {
          e.preventDefault();
          setActiveNav("#contact");
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        aria-label="Go to contact section"
      >
        <AiOutlineMessage aria-hidden="true" />
        <span className="sr-only">Contact</span>
      </a>
    </nav>
  );
};

export default Nav;
