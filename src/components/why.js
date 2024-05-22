import React from "react";
import Image from "next/image";

const Why = () => {
  return (
    <div>
      <Image
        className="floating absolute right-[56%] top-[75%] next "
        width={70}
        height={70}
        src={"/images/next.png"}
        alt="next.js icon"
      />
      <Image
        className="floating absolute right-[72%] top-[6%] css "
        width={40}
        height={40}
        src={"/images/css.svg"}
        alt="css icon"
      />
      <Image
        className="floating absolute right-[85%] top-[80%] tailwind "
        width={40}
        height={40}
        src={"/images/tailwind.svg"}
        alt="tailwind icon"
      />
      <div className="bg-shadow-4" />
      <div className="about-me-container text-xl scale-up-center font-jura p-2">
        <p>
          My journey into front-end development has been enriched by my
          foundational studies in software engineering. With a diploma from
          Damascus University, I've seamlessly integrated my technical knowledge
          with my passion for crafting engaging user experiences. Being a
          front-end developer not only allows me to leverage my expertise in
          software engineering but also empowers me to translate complex
          technical concepts into intuitive designs. This unique blend of skills
          enables me to create impactful digital solutions that resonate with
          users, driving meaningful engagement and fostering lasting
          connections.
        </p>
      </div>
    </div>
  );
};

export default Why;
