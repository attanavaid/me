import React, { useState, useRef } from "react";
import "./work.css";
import { MdLocationOn, MdExpandMore, MdExpandLess } from "react-icons/md";
import { workData } from "../../data/workData";
import { useTheme } from "../Theme";

const Work = () => {
  const { theme } = useTheme();
  const [expandedItems, setExpandedItems] = useState({});
  const contentRefs = useRef({});

  const toggleExpand = (index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="work-wrapper">
      <h3 className="work-title">Work Experience</h3>

      <div className="work__container">
        <div className="flex">
          <div className="w-1 bg-gray-500 rounded-full md:ml-6"></div>
          <div className="-ml-2">
            {workData.map((node, index) => {
              const isExpanded = expandedItems[index];
              const contentRef = (el) => {
                if (el) contentRefs.current[index] = el;
              };

              return (
                <div
                  key={index}
                  className="py-4 flex wow fadeInDown"
                  style={{ animationDuration: `${index * 200 + 500}ms` }}
                  id="workBox"
                >
                  <div
                    className={`workDot relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 ${theme === "dark" ? "bg-white" : "bg-black"} duration-200`}
                    title={`${index + 1}`}
                  ></div>

                  <div className="ml-8 work-entry-content">
                    <img
                      src={`${node.icon}`}
                      alt={`${node.title} company logo`}
                      className="w-auto h-10 object-contain mb-3"
                      loading="lazy"
                    />
                    <div className="mt-3 flex items-baseline">
                      <h4 className="font-semibold work-entry-title">
                        {node.title}
                      </h4>
                      <h5 className="text-sm ml-2 work-entry-period">
                        ({node.period})
                      </h5>
                    </div>

                    <div
                      className={`work-entry-collapsible ${isExpanded ? "expanded" : "collapsed"}`}
                      ref={contentRef}
                    >
                      <div className="work-entry-collapsible-inner">
                        <h5 className="text-base work-entry-subtitle">
                          {node.subtitle}
                        </h5>

                        <div className="work-entry-description">
                          <div className="work-entry-description-inner">
                            {typeof node.description === "string" ? (
                              <p className="text-sm work-entry-text">
                                {node.description}
                              </p>
                            ) : (
                              <div className="work-entry-text">
                                {node.description}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mt-2 flex items-center work-entry-location-wrapper">
                          <MdLocationOn
                            size="1rem"
                            className="work-entry-location-icon"
                            aria-hidden="true"
                          />
                          <h5 className="font-semibold text-sm ml-2 work-entry-location">
                            {node.location}
                          </h5>
                        </div>

                        <h5 className="text-sm mt-2 work-entry-specialization">
                          <strong>Specialization:</strong> {node.specialization}
                        </h5>
                      </div>
                      {!isExpanded && <div className="work-entry-fade"></div>}
                    </div>

                    {!isExpanded && (
                      <button
                        className="work-read-more"
                        onClick={() => toggleExpand(index)}
                        aria-label="Read more about this work experience"
                        title="Read more"
                      >
                        <MdExpandMore size="1.5rem" aria-hidden="true" />
                      </button>
                    )}

                    {isExpanded && (
                      <button
                        className="work-read-more"
                        onClick={() => toggleExpand(index)}
                        aria-label="Read less"
                        title="Read less"
                      >
                        <MdExpandLess size="1.5rem" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
