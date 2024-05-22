"use client";

import Landing from "@/components/landing";
import Contact from "@/components/contact";
import { useState } from "react";
import Me from "@/components/me";
import Skills from "@/components/skills";
import Exp from "@/components/experiance";
import Projects from "@/components/projects";
import Why from "@/components/why";
import Image from "next/image";
import useWindowWidth from "./utils/useWindowWidth";
export default function Home() {
  const windowWidth = useWindowWidth();
  const [page, setPage] = useState("landing");

  const setPageMe = () => {
    setPage("why");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-shadow-1" />
      <div className="absolute -top-[40px] -left-[50px]">
        <Image
          className="js-icon"
          width={180}
          height={180}
          src={"/images/js.svg"}
          alt="js icon"
        />
      </div>
      {windowWidth && windowWidth > 800 && (
        <>
          {page === "landing" && <Landing meDirect={setPageMe} />}
          {page === "contact" && <Contact />}
          {page === "me" && <Me />}
          {page === "skills" && <Skills />}
          {page === "exp" && <Exp />}
          {page === "projects" && <Projects />}
          {page === "why" && <Why />}

          <div className="vertical-separator" />

          <div className="main-menu flex uppercase">
            <div className="flex">
              <div
                className={`me-option cursor-pointer hover:bg-[#996cad] ${
                  page === "me" && "bg-[#AD00FF]"
                }`}
                onClick={() => setPage("me")}
              >
                me
              </div>
              <div
                className={`skills-option cursor-pointer hover:bg-[#996cad] ${
                  page === "skills" && "bg-[#AD00FF]"
                }`}
                onClick={() => setPage("skills")}
              >
                skills
              </div>
            </div>
            <div className="flex">
              <div
                className={`exp-option cursor-pointer hover:bg-[#996cad] ${
                  page === "exp" && "bg-[#AD00FF]"
                }`}
                onClick={() => setPage("exp")}
              >
                expiriance
              </div>
              <div
                className={`why-option cursor-pointer hover:bg-[#996cad] ${
                  page === "why" && "bg-[#AD00FF]"
                }`}
                onClick={() => setPage("why")}
              >
                {" "}
                ?
              </div>
            </div>
            <div className="flex">
              <div
                className={`projects-option cursor-pointer hover:bg-[#996cad] ${
                  page === "projects" && "bg-[#AD00FF]"
                }`}
                onClick={() => setPage("projects")}
              >
                projects
              </div>
            </div>
            <div className="flex">
              <div
                className={`landing-option cursor-pointer hover:bg-[#996cad] ${
                  page === "landing" && "bg-[#AD00FF]"
                }`}
                onClick={() => setPage("landing")}
              >
                <svg
                  width="52"
                  height="39"
                  viewBox="0 0 52 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.29714 4.00253C9.23949 3.78824 9.22468 3.56467 9.25355 3.34465C9.28242 3.12462 9.3544 2.91245 9.46538 2.72027C9.57635 2.5281 9.72414 2.35971 9.90029 2.22473C10.0764 2.08975 10.2775 1.99084 10.4919 1.93366L17.0124 0.185407C17.2365 0.12567 17.4706 0.112794 17.7 0.147583C17.9293 0.182371 18.1491 0.264077 18.3454 0.387597C18.5418 0.511118 18.7106 0.6738 18.8413 0.865483C18.9719 1.05717 19.0617 1.27373 19.1049 1.50166C21.3155 1.23503 23.6611 1.10678 26 1.10678C28.43 1.10678 30.8701 1.24516 33.155 1.53203C33.1945 1.30065 33.2818 1.08005 33.4113 0.884316C33.5408 0.688584 33.7098 0.522029 33.9074 0.395296C34.1049 0.268562 34.3268 0.184437 34.5587 0.148297C34.7906 0.112157 35.0275 0.124796 35.2543 0.185407L41.7748 1.93366C42.0236 2.00026 42.2538 2.12293 42.4479 2.29228C42.642 2.46162 42.7947 2.67314 42.8944 2.91063C42.9941 3.14812 43.0381 3.40528 43.023 3.66241C43.008 3.91953 42.9342 4.1698 42.8075 4.39403C43.28 4.69778 43.7053 5.03528 44.0664 5.39641C45.4434 6.77341 46.6989 8.94016 47.762 11.3769C48.842 13.8508 49.7836 16.7465 50.4789 19.6997C51.1741 22.6528 51.6264 25.7072 51.7074 28.4949C51.7884 31.2489 51.5083 33.9017 50.6004 35.9537C50.1864 36.8749 49.4919 37.6418 48.6161 38.1449C47.7403 38.6479 46.7279 38.8614 45.7235 38.7549C43.577 38.5288 41.9604 37.4252 40.6171 36.146C39.7903 35.363 38.9431 34.3708 38.123 33.419C37.6978 32.9195 37.2793 32.4335 36.881 31.9914C34.424 29.2779 31.4911 26.8378 26 26.8378C20.5089 26.8378 17.576 29.2779 15.119 31.9914C14.7174 32.4335 14.3023 32.9195 13.877 33.419C13.0569 34.3708 12.2098 35.3597 11.3829 36.146C10.0396 37.4285 8.42301 38.5288 6.27651 38.7549C5.27214 38.8614 4.25977 38.6479 3.38396 38.1449C2.50815 37.6418 1.81366 36.8749 1.39964 35.9537C0.488387 33.9017 0.211637 31.2455 0.289262 28.4949C0.370262 25.7072 0.829262 22.6562 1.52114 19.6997C2.21639 16.7465 3.16139 13.8508 4.23801 11.3769C5.30114 8.94016 6.55664 6.77341 7.93026 5.39641C8.37147 4.96365 8.86195 4.58418 9.39164 4.26578C9.35279 4.17969 9.32118 4.0905 9.29714 3.99916V4.00253ZM16.1686 5.39303C13.2088 6.01741 11.2108 6.88816 10.3198 7.78253C9.38826 8.71403 8.33864 10.4252 7.33289 12.7269C6.26592 15.2298 5.42116 17.8216 4.80839 20.4725C4.16105 23.1351 3.77782 25.855 3.66426 28.5928C3.59001 31.1409 3.87351 33.2098 4.48439 34.5868C4.60949 34.855 4.8154 35.0773 5.07324 35.2226C5.33108 35.3678 5.62792 35.4288 5.92214 35.3968C7.02576 35.282 7.98089 34.7252 9.05751 33.7025C9.77301 33.0208 10.4075 32.2749 11.1331 31.4278C11.582 30.9013 12.0646 30.3377 12.6181 29.7268C15.4059 26.6454 19.1758 23.4662 26 23.4662C32.8243 23.4662 36.5941 26.6454 39.3819 29.7268C39.9354 30.3377 40.418 30.9013 40.8669 31.4278C41.5891 32.2749 42.227 33.0208 42.9425 33.7025C44.0158 34.7252 44.9709 35.282 46.0779 35.4002C46.3725 35.4319 46.6696 35.3704 46.9275 35.2245C47.1854 35.0786 47.3911 34.8556 47.5156 34.5868C48.1231 33.2098 48.41 31.1443 48.3358 28.5928C48.2221 25.855 47.8389 23.1351 47.1916 20.4725C46.5788 17.8217 45.734 15.2298 44.6671 12.7269C43.6614 10.4252 42.6084 8.71066 41.6803 7.78253C40.7893 6.88816 38.7913 6.01741 35.8314 5.39303C32.9626 4.78891 29.4965 4.48178 26 4.48178C22.5035 4.48178 19.0374 4.78891 16.1686 5.39303Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div
                className={`contact-option cursor-pointer hover:bg-[#996cad] ${
                  page === "contact" && "bg-[#AD00FF]"
                }`}
                onClick={() => setPage("contact")}
              >
                contact
              </div>
            </div>
          </div>
        </>
      )}

      {windowWidth && windowWidth <= 800 && (
        <>
          <Landing />
          <div className="mt-80">
            <Me />
          </div>
          <div className="mt-96">
            <Why />
          </div>
          <div className="mt-80">
            <Projects />
          </div>
          <div className="mt-48">
            <Skills />
          </div>
          <div className="mt-80">
            <Exp />
          </div>
          <div className="mt-64">
            <Contact />
          </div>
        </>
      )}
    </main>
  );
}
