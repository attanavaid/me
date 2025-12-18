import React, { useState } from "react";
import "./projects.css";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  const [max, setMax] = useState(4);

  return (
    <section id="projects">
      <h5>&nbsp;</h5>
      <h2>Projects</h2>

      <div className="container__mod projects__container">
        {projectsData.map((node, index) => (
          <article
            key={`project-${index}-${node.title}`}
            className="project__item"
          >
            <div
              className="rounded-lg flex flex-col wow fadeIn"
              style={{ animationDelay: `${index * 300 + 300}ms` }}
            >
              <a
                href={node.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-48 bg-black flex-center relative cursor-pointer rounded-lg shadow-lg"
                aria-label={`View ${node.title} project on GitHub`}
              >
                <BiLinkExternal id="project__LinkIcon" aria-hidden="true" />
                <img
                  src={`${node.image}`}
                  alt={`${node.title} project preview`}
                  className="absolute overflow-hidden w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                  loading="lazy"
                />
              </a>

              <span className="sr-only">{node.title}</span>

              <h5 className="mt-4 font-semibold">{node.title}</h5>

              <p className="mt-2 pb-5 text-sm text-justify">
                {node.description}
              </p>

              <p className="pb-2 flex text-xs font-semibold">
                {node.tags.map((x) => (
                  <span key={x} className="mr-2">
                    #{x}
                  </span>
                ))}
              </p>

              <div className="flex mt-2">
                {node.website && (
                  <a
                    href={node.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm-btn btn-light px-2 mr-2 hover:text-primary-500"
                    aria-label={`View ${node.title} live demo`}
                  >
                    <BiLinkExternal
                      size="1rem"
                      className="sm-btn__icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Demo</span>
                  </a>
                )}

                {node.github && (
                  <a
                    href={node.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm-btn btn-light px-2 mr-2 hover:text-primary-500"
                    aria-label={`View ${node.title} source code on GitHub`}
                  >
                    <FaGithub
                      size="1rem"
                      className="sm-btn__icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">GitHub</span>
                  </a>
                )}

                {node.video && (
                  <a
                    href={node.video}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm-btn btn-light px-2 mr-2 hover:text-primary-500"
                    aria-label={`Watch ${node.title} video demonstration`}
                  >
                    <FaYoutube
                      size="1rem"
                      className="sm-btn__icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Video</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="container__mod projects__container">
        <a
          href="https://github.com/attanavaid"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
          aria-label="Visit Atta Navaid's GitHub profile to explore more projects"
        >
          <FaGithub size="1.4rem" className="mr-2 mt-0.5" aria-hidden="true" />
          Explore my Github Page
        </a>
      </div>
    </section>
  );
};

export default Projects;
