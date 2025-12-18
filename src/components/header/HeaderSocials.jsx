import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GrGithub } from "react-icons/gr";
import { FiDribbble } from "react-icons/fi";
import { FaArtstation } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div
      className="header__socials"
      role="list"
      aria-label="Social media links"
    >
      <a
        href="https://www.linkedin.com/in/attanavaid/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Atta Navaid's LinkedIn profile"
      >
        <BsLinkedin size="2rem" aria-hidden="true" />
      </a>

      <a
        href="https://github.com/attanavaid"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Atta Navaid's GitHub profile"
      >
        <GrGithub size="2rem" aria-hidden="true" />
      </a>

      <a
        href="https://www.dribbble.com/attanavaid"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Atta Navaid's Dribbble profile"
      >
        <FiDribbble size="2rem" aria-hidden="true" />
      </a>

      <a
        href="https://www.artstation.com/modelsbyat"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Atta Navaid's ArtStation profile"
      >
        <FaArtstation size="2rem" aria-hidden="true" />
      </a>
    </div>
  );
};

export default HeaderSocials;
