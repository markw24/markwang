import React from "react";
import headshot from "./headshot.png";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-3/5 flex justify-center items-center relative">
      <img
        className="object-cover rounded-full w-100 h-100 lg:w-3/5 lg:h-3/5 ml-4 lg:ml-24"
        src={headshot}
        alt="bannerImg"
      />
      <div className=""></div>
    </div>
  );
};

export default RightBanner;
