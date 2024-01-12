import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["software developer", "founder", "tech enthusiast"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-auto lgl:w-1/2 flex flex-col gap-20 ml-10">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">welcome to my life!</h4> */}
        <h1 className="text-6xl font-bold text-white">
          hey! i'm
          <span className="text-cyan-200"> mark wang</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="white" />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          welcome to my personal website! you can find out more about myself, my
          experiences, and what i've worked on previously. please feel free to
          reach out to me located at the bottom of the website!
        </p>
      </div>
      <div className="text-cyan-200">
        {/* Media */}
        <Media />
      </div>
    </div>
  );
};

export default LeftBanner;
