import React from "react";
import skillsList from "@/personal-data/skills";

const Skills = () => {
  const isOdd = (index) => {
    if (index % 2 != 0) return true;
    else return false;
  };

  return (
    <div>
      <div className="bg-shadow-4" />
      <div className="about-me-container text-xl scale-up-center font-jura leading-[80px] floating">
        {skillsList.map((skill, index) => (
          <span
            className={`mr-8 text-sm  ${
              !isOdd(index)
                ? "relative top-[20px] right-[10px] text-[#FFFFFF80]"
                : ""
            } ${isOdd(index) ? "relative bottom-[20px] left-[20px]" : ""} `}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
