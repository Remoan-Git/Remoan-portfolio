"use client";
import React, { useState } from "react";
import "@/styles/card.css";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(1); // State to track active slide

  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber); // Update active slide when link is clicked
  };

  return (
    <div>
      <Image
        className="floating absolute right-[60%] top-[10%] react"
        width={40}
        height={40}
        src={"/images/react.svg"}
        alt="react icon"
      />
      <Image
        className="floating absolute right-[85%] top-[18%] html"
        width={40}
        height={40}
        src={"/images/html.svg"}
        alt="html icon"
      />
      <Image
        className="floating absolute right-[85%] top-[75%] redux"
        width={40}
        height={40}
        src={"/images/redux.svg"}
        alt="redux icon"
      />

      <div className="bg-shadow-4" />
      <span className="section-title"> Projects</span>
      <div className="about-me-container text-xl scale-up-center font-jura p-2 projects-mob">
        <div className="container">
          <div className="slideshow">
            <div id="slide-1" className={`slide`}>
              <a
                className="slide-a"
                href="#slide-4"
                onClick={() => handleSlideChange(4)}
              ></a>
              <a
                className="slide-a"
                href="#slide-2"
                onClick={() => handleSlideChange(2)}
              ></a>
              {activeSlide === 1 && (
                <div className="text-center mt-16 scale-in-center flex items-center justify-center">
                  <div className="project-card flex flex-col">
                    <div className="flex flex-col gap-8">
                      <div>
                        <p className="card__title font-white">
                          BaguetteApp CRM
                        </p>

                        <p className="card__description font-white">
                          Owned By ASTUDIO - UAE
                        </p>
                      </div>
                      <small className="text-xs text-[#ffffff]">Click Me !</small>
                    </div>
                    <div className="card__content">
                      <p className="card__sub__title">BaguetteApp CRM</p>
                      <p className="card__description">
                        I co-developed BaguetteApp CRM with an agile team, using
                        Git for version control and Next.js for efficient
                        development.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div id="slide-2" className={`slide`}>
              <a
                className="slide-a"
                href="#slide-1"
                onClick={() => handleSlideChange(1)}
              ></a>
              <a
                className="slide-a"
                href="#slide-3"
                onClick={() => handleSlideChange(3)}
              ></a>
              {activeSlide === 2 && ( // Render content only if activeSlide is 2
                <div className="text-center mt-16 scale-in-center flex items-center justify-center">
                  <div className="project-card flex flex-col almasri-background">
                    <div className="flex flex-col gap-8">
                      <p className="card__title font-white">
                        Al-Masri Ops Management System
                      </p>
                      <small className=" text-xs text-[#ffffff]">Click Me !</small>
                    </div>

                    <div className="card__content">
                      <Link
                        className="left-[0]"
                        href={"https://almasri-app.netlify.app/"}
                        target="blank"
                      >
                        <p className="card__sub__title  underline">
                          {" "}
                          Al-masri Operation Management System{" "}
                        </p>
                      </Link>
                      <p className="card__description">
                        I was a front-end developer on the Al-masri Operation
                        Management System project, optimizing operations for
                        Al-masri Poultry by streamlining inventory management
                        and logistics through intuitive interfaces.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div id="slide-3" className={`slide`}>
              <a
                className="slide-a"
                href="#slide-2"
                onClick={() => handleSlideChange(2)}
              ></a>
              <a
                className="slide-a"
                href="#slide-4"
                onClick={() => handleSlideChange(4)}
              ></a>
              {activeSlide === 3 && ( // Render content only if activeSlide is 2
                <div className="text-center mt-16 scale-in-center flex items-center justify-center">
                  <div className="project-card flex flex-col ecommerce-background">
                    <div className="flex flex-col gap-8">
                      <p className="card__title font-white">
                        Mini E-commerce App
                      </p>
                      <small className=" text-xs text-[#ffffff]">Click Me !</small>
                    </div>
                    <div className="card__content">
                      <Link
                        className="left-[0]"
                        href={"https://main--remoant-app.netlify.app/"}
                        target="blank"
                      >
                        <p className="card__sub__title  underline">
                          {" "}
                          Mini E-commerce App{" "}
                        </p>
                      </Link>
                      <p className="card__description">
                        I built a Mini E-commerce App alone, handling frontend
                        and Firebase integration. Users could seamlessly browse
                        and purchase products. It was a rewarding solo project.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div id="slide-4" className={`slide`}>
              <a
                className="slide-a"
                href="#slide-3"
                onClick={() => handleSlideChange(3)}
              ></a>
              <a
                className="slide-a"
                href="#slide-1"
                onClick={() => handleSlideChange(1)}
              ></a>
              {activeSlide === 4 && ( // Render content only if activeSlide is 2
                <div className="text-center mt-16 scale-in-center flex items-center justify-center">
                  <div className="project-card flex flex-col">
                    <div className="flex flex-col gap-8">
                      <p className="card__title font-white">Befit Gym websit</p>
                      <small className=" text-xs text-[#ffffff]">Click Me !</small>
                    </div>
                    <div className="card__content">
                      <Link
                        className="left-[0]"
                        href={"https://main--remoant-app.netlify.app/"}
                        target="blank"
                      >
                        <p className="card__sub__title  underline">
                          {" "}
                          Befit Gym websit{" "}
                        </p>
                      </Link>
                      <p className="card__description">
                        I was a front-end developer on the Befit Gym App
                        project, focusing on creating intuitive user interfaces.
                        Our goal was to enhance the gym experience digitally.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Add more slides as needed */}
          </div>
          <div className="pagination">
            <a
              href="#slide-1"
              onClick={() => handleSlideChange(1)}
              className={activeSlide === 1 ? "active" : ""}
            >
              <span>1</span>
            </a>
            <a
              href="#slide-2"
              onClick={() => handleSlideChange(2)}
              className={activeSlide === 2 ? "active" : ""}
            >
              <span>2</span>
            </a>
            <a
              href="#slide-3"
              onClick={() => handleSlideChange(3)}
              className={activeSlide === 3 ? "active" : ""}
            >
              <span>3</span>
            </a>
            <a
              href="#slide-4"
              onClick={() => handleSlideChange(4)}
              className={activeSlide === 4 ? "active" : ""}
            >
              <span>3</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
