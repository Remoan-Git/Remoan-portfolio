import React from "react";
import PdfDownloader from "./pdfDownload";

const Me = () => {
  return (
    <div>
      <div className="bg-shadow-4" />
      <div className="about-me-container text-xl scale-up-center font-jura p-2">
        <div className="mr-4 mt-2 absolute right-0 dwn-btn-container">
          <PdfDownloader />
        </div>

        <p>
          Hi,
          <br /> I am <b className="text-[#DA8BFF] underline">Remoan Toumani</b>
          <br /> <br />a software engineer and front-end developer from Syria.
          With a diploma in Software Engineering from Damascus University, I've
          honed my skills in front-end development, specializing in crafting
          intuitive user interfaces.
          <br />
          {/* <br /> */}
          Throughout my career, I've contributed to diverse projects, leveraging
          my expertise to create visually captivating and functional designs.
          Continuous learning is key to staying relevant, and I've pursued
          courses in React, Agile methodologies, and Odoo development to expand
          my knowledge base. Driven by a passion for innovation, I'm committed
          to leveraging technology to create impactful user experiences.
        </p>
      </div>
    </div>
  );
};

export default Me;
