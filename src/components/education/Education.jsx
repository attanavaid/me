import React, { useState, useRef } from "react";
import "./education.css";
import { MdLocationOn, MdExpandMore, MdExpandLess } from "react-icons/md";
import { educationData } from "../../data/educationData";
import { useTheme } from "../Theme";

const Education = () => {
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
    <div className="education-wrapper">
      <h3 className="education-title">Education</h3>

      <div className="education__container">
        <div className="flex">
          <div className="w-1 bg-gray-500 rounded-full md:ml-6"></div>
          <div className="-ml-2">
            {educationData.map((node, index) => {
              const isExpanded = expandedItems[index];
              const contentRef = (el) => {
                if (el) contentRefs.current[index] = el;
              };

              return (
                <div
                  key={index}
                  className="py-4 flex wow fadeInDown"
                  style={{ animationDuration: `${index * 200 + 500}ms` }}
                  id="educationBox"
                >
                  <div
                    className={`educationDot relative mt-3 w-3 h-3 rounded-full shadow-lg z-2 ${theme === "dark" ? "bg-white" : "bg-black"} duration-200`}
                    title={`${index + 1}`}
                  ></div>

                  <div className="ml-8 education-entry-content">
                    <img
                      src={`${node.icon}`}
                      alt={`${node.title} institution logo`}
                      className="w-auto h-10 object-contain mb-3"
                      loading="lazy"
                    />
                    <div className="mt-3 items-baseline">
                      <h4 className="font-semibold education-entry-title">
                        {node.title}
                      </h4>
                    </div>

                    <div
                      className={`education-entry-collapsible ${isExpanded ? "expanded" : "collapsed"}`}
                      ref={contentRef}
                    >
                      <div className="education-entry-collapsible-inner">
                        <h5 className="text-sm mb-2 education-entry-period">
                          ({node.period})
                        </h5>

                        <h5 className="text-base education-entry-subtitle">
                          {node.subtitle}
                        </h5>

                        <div className="mt-2 flex items-center education-entry-location-wrapper">
                          <MdLocationOn
                            size="1rem"
                            className="education-entry-location-icon"
                            aria-hidden="true"
                          />
                          <h5 className="font-semibold text-sm ml-2 education-entry-location">
                            {node.location}
                          </h5>
                        </div>

                        <h5 className="text-sm mt-4 font-semibold education-entry-gpa">
                          Cumulative GPA: {node.cgpa}
                        </h5>

                        <h5 className="text-sm font-semibold education-entry-honors">
                          Honors/Awards: {node.honors}
                        </h5>
                      </div>
                      {!isExpanded && (
                        <div className="education-entry-fade"></div>
                      )}
                    </div>

                    {!isExpanded && (
                      <button
                        className="education-read-more"
                        onClick={() => toggleExpand(index)}
                        aria-label="Read more about this education"
                        title="Read more"
                      >
                        <MdExpandMore size="1.5rem" aria-hidden="true" />
                      </button>
                    )}

                    {isExpanded && (
                      <button
                        className="education-read-more"
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

export default Education;
