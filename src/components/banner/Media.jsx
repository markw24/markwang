import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithubSquare,
  FaMedium,
  FaPython,
  FaJs,
} from "react-icons/fa";
import { SiC } from "react-icons/si";
import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base font-bold mb-4">find me on</h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/markwang0/"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/markw24"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://medium.com/@wangmark24"
            target="_blank"
            rel="noopener noreferrer"
            className="bannerIcon"
          >
            <FaMedium />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base font-bold mb-4">proficient technical tools</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaPython />
          </span>
          <span className="bannerIcon">
            <SiC />
          </span>
          <span className="bannerIcon">
            <FaJs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
