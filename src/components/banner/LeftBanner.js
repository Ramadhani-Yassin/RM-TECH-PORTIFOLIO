import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaReact,
  FaAngular,
} from "react-icons/fa";
import { SiSpringboot, SiFlutter } from "react-icons/si"; // Removed unused icons

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Development", "FinTech Solutions", "System Analysis", "Digital Transformation"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO OUR WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          We are <span className="text-designColor capitalize">Resilient Matrix TECH</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          Your partner in <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          We leverage ICT and Accounting expertise to bridge the gap between technology
          and finance — building integrated digital tools that streamline operations,
          automate financial tasks, enhance data accuracy, and support smarter business decisions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find us in
          </h2>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/ramadhani-yassin-ramadhani/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            <a href="https://github.com/Ramadhani-Yassin" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaGithub />
              </span>
            </a>
            <a href="https://www.instagram.com/rm_tech.tz/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaInstagram />
              </span>
            </a>
            <a href="https://web.facebook.com/resilient.matrix.technologies" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiSpringboot />
            </span>
            <span className="bannerIcon">
              <FaAngular />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiFlutter />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;