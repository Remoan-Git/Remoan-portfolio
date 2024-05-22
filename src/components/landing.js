import React from "react";
import Image from "next/image";
const Landing = ({ meDirect }) => {
  return (
    <div>
      <div className="bg-shadow-2" />
      <div className="bg-shadow-3" />
      <div className="landing-title text-4xl scale-up-center flex flex-col items-center">
        <Image src={"/images/profile.webp"} width={150} height={150} alt="profile pic" />
        <div>
          I Am <span className="text-[#DA8BFF]">Remoan Toumani</span>
        </div>{" "}
        a Front-end Web
        <div> Developer</div>
        <span className="font-jura text-4xl why">
          But{" "}
          <span
            className="text-[#DA8BFF] underline cursor-pointer"
            onClick={() => meDirect()}
          >
            why?
          </span>
        </span>
        <span className="font-jura text-4xl why-mob">
          But <span className="text-[#DA8BFF]">why?</span>
        </span>
      </div>
      <div className="separator-ball-1 rotate-scale-up" />
      <div className="landing-pyramid slide-top">
        <svg
          width="10.2vw"
          height="10.2vw"
          viewBox="0 0 154 164"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M76.2062 43.1134L76.2062 174.887H0L76.2062 43.1134Z"
            fill="url(#paint0_linear_1_287)"
          />
          <path
            d="M76.2062 43.1134L76.2062 174.887H154L76.2062 43.1134Z"
            fill="url(#paint1_linear_1_287)"
          />
          <circle
            cx="75.5"
            cy="42.5"
            r="42.5"
            fill="url(#paint2_radial_1_287)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_287"
              x1="11.9072"
              y1="174.887"
              x2="84.9381"
              y2="174.887"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.626407" stopColor="#DA8BFF" />
              <stop offset="1" stopColor="white" stopOpacity="0.78" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_287"
              x1="141.845"
              y1="174.887"
              x2="67.2923"
              y2="174.887"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.84375" stopColor="#C446FF" />
              <stop offset="1" stopColor="#A2A2A2" />
            </linearGradient>
            <radialGradient
              id="paint2_radial_1_287"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(75.5 42.5) rotate(90) scale(42.5)"
            >
              <stop stopColor="#E4ABFF" />
              <stop offset="0.927083" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Landing;
