"use client";
import React from "react";
import "@/styles/card.css";
import Image from "next/image";
import Slider from "react-slick";
import experiences from "@/personal-data/experiences";

const Exp = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="bg-shadow-4" />
      <span className="section-title">Experience</span>
      <div className="about-me-container text-xl scale-up-center font-jura p-2 projects-mob">
        <Slider {...settings}>
          {experiences.map((experience, index) => (
            <div key={index} className="text-center mt-10 scale-in-center">
              <div className="company-icon">
                <Image
                  className="logo rounded-full"
                  src={experience.companyIcon}
                  width={experience.iconWidth}
                  height={experience.iconHeight}
                  alt={experience.iconAlt}
                  priority={true}
                />
              </div>
              <b className="underline">{experience.title}</b>
              <div className="text-left mt-2 ml-6">
                {experience.company} | {experience.date} <br />
                {experience.description}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Exp;
