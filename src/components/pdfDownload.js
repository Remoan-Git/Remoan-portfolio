import React from "react";
import "@/styles/buttons.css";
import { useTheme } from "next-themes";

const PdfDownloader = () => {
  const handleDownload = () => {
    const pdfUrl = "/data/Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "example.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const {theme} = useTheme();

  return (
    <div>
      <button onClick={handleDownload} className="btn2">
        <span className="flex">
          {" "}
          <svg
            fill={theme == 'light' ? "#0c0c0c" : "#ffffff"}
            width="30px"
            height="30px"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M512 666.5L367.2 521.7l36.2-36.2 83 83V256h51.2v312.5l83-83 36.2 36.2L512 666.5zm-204.8 50.3V768h409.6v-51.2H307.2z"></path>
            </g>
          </svg>{" "}
          Resume
        </span>
      </button>
    </div>
  );
};

export default PdfDownloader;
