"use client";
import React, { useState } from "react";
import "@/styles/card.css";
import Image from "next/image";

const Exp = () => {
  const [activeSlide, setActiveSlide] = useState(1); // State to track active slide

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber); // Update active slide when link is clicked
  };

  return (
    <div>
      <div className="bg-shadow-4" />
      <span className="section-title"> Experiance</span>
      <div className="about-me-container text-xl scale-up-center font-jura p-2 projects-mob">
        {activeSlide == 1 && (
          <div className="company-icon">
            <Image
              className="logo rounded-full"
              src={"/logos/astudio.jpg"}
              width={80}
              height={80}
              alt="Astudio icon"
            />
          </div>
        )}
        {activeSlide == 2 && (
          <div className="company-icon">
            <Image
              className="logo rounded-full"
              src={"/logos/itos.png"}
              width={155}
              height={40}
              alt="itos icon"
            />
          </div>
        )}
        <div className="container">
          <div className="slideshow">
            <div id="silde-one" className={`slide`}>
              <a
                className="slide-a"
                href="#slide-two"
                onClick={() => handleSlideChange(2)}
              ></a>
              <a
                className="slide-a"
                href="#slide-two"
                onClick={() => handleSlideChange(2)}
              ></a>
              {activeSlide === 1 && (
                <div className="text-center mt-10 scale-in-center">
                  <b className="underline">
                    Front-end Web Developer - Remotely
                  </b>

                  <div className="text-left mt-2 ml-6">
                    ASTUDIO - UAE | August 2023 <br />
                    As a Front-end Web Developer at ASTUDIO, I helped develop
                    BaguetteApp CRM, collaborating with a team. We followed
                    agile methods, using Jira for project management and Git for
                    version control, ensuring efficiency.
                  </div>
                </div>
              )}
            </div>
            <div id="slide-two" className={`slide`}>
              <a
                className="slide-a"
                href="#silde-one"
                onClick={() => handleSlideChange(1)}
              ></a>
              <a
                className="slide-a"
                href="#silde-one"
                onClick={() => handleSlideChange(1)}
              ></a>
              {activeSlide === 2 && ( // Render content only if activeSlide is 2
                <div className="text-center mt-10 scale-in-center">
                  <b className="underline">Odoo DevOps and QA Engineer</b>

                  <div className="text-left mt-2 ml-6">
                    ITOS - Damascus / Syria | 2022 - 2024 <br />
                    As a DevOps specialist, I implemented and deployed Odoo ERP,
                    managed version control, and administered Odoo.sh. I also
                    conducted software testing, meticulously designing and
                    executing test cases to ensure top performance.
                  </div>
                </div>
              )}
            </div>
            {/* Add more slides as needed */}
          </div>
          <div className="pagination">
            <a
              href="#silde-one"
              onClick={() => handleSlideChange(1)}
              className={activeSlide === 1 ? "active" : ""}
            >
              <span>1</span>
            </a>
            <a
              href="#slide-two"
              onClick={() => handleSlideChange(2)}
              className={activeSlide === 2 ? "active" : ""}
            >
              <span>2</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp;
