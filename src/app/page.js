"use client";

import Landing from "@/components/landing";
import Contact from "@/components/contact";
import { useState } from "react";
import Me from "@/components/me";
import Skills from "@/components/skills";

export default function Home() {
  const [page, setPage] = useState("landing");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="bg-shadow-1" />
      {page === "landing" && <Landing />}
      {page === "contact" && <Contact />}
      {page === "me" && <Me />}
      {page === "skills" && <Skills />}
      <div className="vertical-separator" />
      <div className="absolute -top-[40px] -left-[50px]">
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="logo">
            <g id="S">
              <mask
                id="path-1-outside-1_1_282"
                maskUnits="userSpaceOnUse"
                x="91"
                y="80"
                width="22"
                height="35"
                fill="black"
              >
                <rect fill="white" x="91" y="80" width="22" height="35" />
                <path d="M101.768 113.42C99.752 113.42 98.016 113.084 96.56 112.412C95.132 111.74 94.026 110.774 93.242 109.514C92.458 108.254 92.052 106.756 92.024 105.02H95.804C95.804 106.56 96.322 107.778 97.358 108.674C98.422 109.57 99.892 110.018 101.768 110.018C103.532 110.018 104.904 109.584 105.884 108.716C106.892 107.848 107.396 106.644 107.396 105.104C107.396 103.872 107.06 102.794 106.388 101.87C105.744 100.946 104.806 100.302 103.574 99.938L99.416 98.636C97.316 97.992 95.692 96.914 94.544 95.402C93.424 93.89 92.864 92.112 92.864 90.068C92.864 88.416 93.228 86.988 93.956 85.784C94.712 84.552 95.762 83.6 97.106 82.928C98.45 82.228 100.032 81.878 101.852 81.878C104.54 81.878 106.696 82.634 108.32 84.146C109.944 85.63 110.77 87.618 110.798 90.11H107.018C107.018 88.598 106.556 87.422 105.632 86.582C104.736 85.714 103.462 85.28 101.81 85.28C100.186 85.28 98.912 85.672 97.988 86.456C97.092 87.24 96.644 88.332 96.644 89.732C96.644 90.992 96.98 92.084 97.652 93.008C98.324 93.932 99.29 94.59 100.55 94.982L104.75 96.326C106.794 96.97 108.376 98.062 109.496 99.602C110.616 101.142 111.176 102.948 111.176 105.02C111.176 106.7 110.784 108.17 110 109.43C109.216 110.69 108.11 111.67 106.682 112.37C105.282 113.07 103.644 113.42 101.768 113.42Z" />
              </mask>
              <path
                d="M101.768 113.42C99.752 113.42 98.016 113.084 96.56 112.412C95.132 111.74 94.026 110.774 93.242 109.514C92.458 108.254 92.052 106.756 92.024 105.02H95.804C95.804 106.56 96.322 107.778 97.358 108.674C98.422 109.57 99.892 110.018 101.768 110.018C103.532 110.018 104.904 109.584 105.884 108.716C106.892 107.848 107.396 106.644 107.396 105.104C107.396 103.872 107.06 102.794 106.388 101.87C105.744 100.946 104.806 100.302 103.574 99.938L99.416 98.636C97.316 97.992 95.692 96.914 94.544 95.402C93.424 93.89 92.864 92.112 92.864 90.068C92.864 88.416 93.228 86.988 93.956 85.784C94.712 84.552 95.762 83.6 97.106 82.928C98.45 82.228 100.032 81.878 101.852 81.878C104.54 81.878 106.696 82.634 108.32 84.146C109.944 85.63 110.77 87.618 110.798 90.11H107.018C107.018 88.598 106.556 87.422 105.632 86.582C104.736 85.714 103.462 85.28 101.81 85.28C100.186 85.28 98.912 85.672 97.988 86.456C97.092 87.24 96.644 88.332 96.644 89.732C96.644 90.992 96.98 92.084 97.652 93.008C98.324 93.932 99.29 94.59 100.55 94.982L104.75 96.326C106.794 96.97 108.376 98.062 109.496 99.602C110.616 101.142 111.176 102.948 111.176 105.02C111.176 106.7 110.784 108.17 110 109.43C109.216 110.69 108.11 111.67 106.682 112.37C105.282 113.07 103.644 113.42 101.768 113.42Z"
                fill="#DA8BFF"
              />
              <path
                d="M96.56 112.412L96.1342 113.317L96.1409 113.32L96.56 112.412ZM93.242 109.514L92.3929 110.042L93.242 109.514ZM92.024 105.02V104.02H91.0077L91.0241 105.036L92.024 105.02ZM95.804 105.02H96.804V104.02H95.804V105.02ZM97.358 108.674L96.7038 109.43L96.7139 109.439L97.358 108.674ZM105.884 108.716L105.231 107.958L105.221 107.967L105.884 108.716ZM106.388 101.87L105.568 102.442L105.573 102.45L105.579 102.458L106.388 101.87ZM103.574 99.938L103.275 100.892L103.283 100.895L103.291 100.897L103.574 99.938ZM99.416 98.636L99.7148 97.6817L99.7092 97.6799L99.416 98.636ZM94.544 95.402L93.7404 95.9973L93.7476 96.0067L94.544 95.402ZM93.956 85.784L93.1037 85.261L93.1003 85.2666L93.956 85.784ZM97.106 82.928L97.5532 83.8224L97.5606 83.8187L97.5679 83.8149L97.106 82.928ZM108.32 84.146L107.639 84.8779L107.645 84.8842L108.32 84.146ZM110.798 90.11V91.11H111.809L111.798 90.0988L110.798 90.11ZM107.018 90.11H106.018V91.11H107.018V90.11ZM105.632 86.582L104.936 87.3002L104.948 87.3113L104.959 87.3219L105.632 86.582ZM97.988 86.456L97.341 85.6935L97.3352 85.6984L97.3295 85.7034L97.988 86.456ZM97.652 93.008L98.4607 92.4198H98.4607L97.652 93.008ZM100.55 94.982L100.855 94.0295L100.847 94.0271L100.55 94.982ZM104.75 96.326L104.445 97.2784L104.449 97.2798L104.75 96.326ZM109.496 99.602L110.305 99.0138L109.496 99.602ZM110 109.43L109.151 108.902L110 109.43ZM106.682 112.37L106.242 111.472L106.235 111.476L106.682 112.37ZM101.768 112.42C99.8606 112.42 98.2744 112.102 96.9791 111.504L96.1409 113.32C97.7576 114.066 99.6434 114.42 101.768 114.42V112.42ZM96.9858 111.507C95.7206 110.912 94.7666 110.071 94.0911 108.986L92.3929 110.042C93.2854 111.477 94.5434 112.568 96.1342 113.317L96.9858 111.507ZM94.0911 108.986C93.4181 107.904 93.0494 106.59 93.0239 105.004L91.0241 105.036C91.0546 106.922 91.4979 108.604 92.3929 110.042L94.0911 108.986ZM92.024 106.02H95.804V104.02H92.024V106.02ZM94.804 105.02C94.804 106.81 95.4194 108.32 96.7038 109.43L98.0122 107.918C97.2246 107.236 96.804 106.31 96.804 105.02H94.804ZM96.7139 109.439C98.0125 110.533 99.7388 111.018 101.768 111.018V109.018C100.045 109.018 98.8315 108.607 98.0021 107.909L96.7139 109.439ZM101.768 111.018C103.69 111.018 105.329 110.544 106.547 109.465L105.221 107.967C104.479 108.624 103.374 109.018 101.768 109.018V111.018ZM106.537 109.474C107.801 108.385 108.396 106.884 108.396 105.104H106.396C106.396 106.404 105.983 107.311 105.231 107.958L106.537 109.474ZM108.396 105.104C108.396 103.678 108.003 102.39 107.197 101.282L105.579 102.458C106.117 103.198 106.396 104.066 106.396 105.104H108.396ZM107.208 101.298C106.417 100.162 105.275 99.3978 103.857 98.979L103.291 100.897C104.337 101.206 105.071 101.73 105.568 102.442L107.208 101.298ZM103.873 98.9837L99.7148 97.6817L99.1172 99.5903L103.275 100.892L103.873 98.9837ZM99.7092 97.6799C97.7771 97.0874 96.3425 96.1171 95.3404 94.7973L93.7476 96.0067C95.0415 97.7109 96.8549 98.8966 99.1228 99.5921L99.7092 97.6799ZM95.3476 94.8068C94.3663 93.4821 93.864 91.9172 93.864 90.068H91.864C91.864 92.3068 92.4817 94.2979 93.7404 95.9972L95.3476 94.8068ZM93.864 90.068C93.864 88.5663 94.1935 87.3239 94.8117 86.3014L93.1003 85.2666C92.2625 86.6521 91.864 88.2657 91.864 90.068H93.864ZM94.8083 86.307C95.4626 85.2407 96.3693 84.4144 97.5532 83.8224L96.6588 82.0336C95.1547 82.7856 93.9614 83.8633 93.1037 85.261L94.8083 86.307ZM97.5679 83.8149C98.7433 83.2027 100.161 82.878 101.852 82.878V80.878C99.9033 80.878 98.1567 81.2533 96.6441 82.0411L97.5679 83.8149ZM101.852 82.878C104.344 82.878 106.237 83.5731 107.639 84.8779L109.001 83.4141C107.155 81.6948 104.736 80.878 101.852 80.878V82.878ZM107.645 84.8842C109.037 86.1557 109.773 87.8656 109.798 90.1212L111.798 90.0988C111.767 87.3703 110.851 85.1043 108.995 83.4078L107.645 84.8842ZM110.798 89.11H107.018V91.11H110.798V89.11ZM108.018 90.11C108.018 88.3806 107.48 86.9109 106.305 85.8421L104.959 87.3219C105.632 87.9331 106.018 88.8154 106.018 90.11H108.018ZM106.328 85.8638C105.191 84.7625 103.635 84.28 101.81 84.28V86.28C103.289 86.28 104.281 86.6655 104.936 87.3002L106.328 85.8638ZM101.81 84.28C100.03 84.28 98.4992 84.7108 97.341 85.6935L98.635 87.2185C99.3248 86.6332 100.342 86.28 101.81 86.28V84.28ZM97.3295 85.7034C96.1777 86.7112 95.644 88.0995 95.644 89.732H97.644C97.644 88.5645 98.0063 87.7688 98.6465 87.2086L97.3295 85.7034ZM95.644 89.732C95.644 91.1805 96.0342 92.4837 96.8433 93.5962L98.4607 92.4198C97.9258 91.6843 97.644 90.8035 97.644 89.732H95.644ZM96.8433 93.5962C97.6609 94.7204 98.8205 95.4912 100.253 95.9369L100.847 94.0271C99.7595 93.6888 98.9871 93.1436 98.4607 92.4198L96.8433 93.5962ZM100.245 95.9344L104.445 97.2784L105.055 95.3736L100.855 94.0296L100.245 95.9344ZM104.449 97.2798C106.316 97.8679 107.709 98.8447 108.687 100.19L110.305 99.0138C109.043 97.2793 107.272 96.0721 105.051 95.3722L104.449 97.2798ZM108.687 100.19C109.672 101.544 110.176 103.14 110.176 105.02H112.176C112.176 102.756 111.56 100.74 110.305 99.0138L108.687 100.19ZM110.176 105.02C110.176 106.539 109.824 107.82 109.151 108.902L110.849 109.958C111.744 108.52 112.176 106.861 112.176 105.02H110.176ZM109.151 108.902C108.473 109.991 107.514 110.848 106.242 111.472L107.122 113.268C108.706 112.492 109.959 111.389 110.849 109.958L109.151 108.902ZM106.235 111.476C104.999 112.094 103.519 112.42 101.768 112.42V114.42C103.769 114.42 105.565 114.046 107.129 113.264L106.235 111.476Z"
                fill="white"
                fillOpacity="0.63"
                mask="url(#path-1-outside-1_1_282)"
              />
            </g>
            <path
              id="J"
              d="M75.34 100.42C72.4 100.42 70.09 99.594 68.41 97.942C66.73 96.29 65.89 94.036 65.89 91.18H69.67C69.67 93.056 70.16 94.512 71.14 95.548C72.148 96.556 73.548 97.06 75.34 97.06C77.132 97.06 78.518 96.556 79.498 95.548C80.506 94.512 81.01 93.056 81.01 91.18V72.784H73.66V69.34H84.79V91.18C84.79 94.036 83.936 96.29 82.228 97.942C80.548 99.594 78.252 100.42 75.34 100.42Z"
              fill="white"
            />
            <circle
              id="orbit"
              cx="90"
              cy="90"
              r="89.5"
              stroke="white"
              strokeOpacity="0.2"
            />
            <circle id="planet" cx="164" cy="38" r="16" fill="#DA8BFF" />
          </g>
        </svg>
      </div>

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
    </main>
  );
}
