"use client";
import React from "react";
import "@/styles/card.css";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import projects from "@/personal-data/projectsData";

const Projects = () => {
  // const [activeSlide, setActiveSlide] = useState(1);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    // afterChange: (current) => setActiveSlide(current + 1),
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
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="text-center mt-16 scale-in-center items-center justify-center inline-flex-important"
            >
              <div
                className={`project-card flex flex-col ${project.backgroundClass}`}
              >
                <div className="flex flex-col gap-8">
                  <div>
                    <p className="card__title font-white">{project.title}</p>
                    {project.description && (
                      <p className="card__description font-white">
                        {project.description}
                      </p>
                    )}
                  </div>
                  <small className="text-xs text-[#ffffff]">Click Me !</small>
                </div>
                <div className="card__content">
                  {project.link ? (
                    <Link
                      className="left-[0]"
                      href={project.link}
                      target="_blank"
                    >
                      <p className="card__sub__title underline">
                        {project.subTitle}
                      </p>
                    </Link>
                  ) : (
                    <p className="card__sub__title">{project.subTitle}</p>
                  )}
                  <p className="card__description">{project.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
