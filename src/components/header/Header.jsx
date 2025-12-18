import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/header/standing.png";
import HeaderSocials from "./HeaderSocials";
import TypingText from "./TypingText";

const Header = () => {
  return (
    <header id="main-content">
      <div className="container header__container">
        <div className="introCard mb-4 flex flex-col">
          <h1 id="introText">Hello, I'm Atta Navaid</h1>

          <div
            className="typedText text-light font-semibold"
            aria-live="polite"
            aria-atomic="true"
          >
            <TypingText
              strings={[
                "Web Developer",
                "Front-End Developer",
                "Back-End Developer",
                "3D Artist",
                "Fullstack Developer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>

          <CTA className="items-start" />
        </div>
        <div>
          <HeaderSocials />
          <div className="me">
            <img
              src={ME}
              alt="Atta Navaid, a professional developer and 3D artist"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
