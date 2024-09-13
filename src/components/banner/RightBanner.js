import React from "react";
import headshot from "./IMG_4092.jpeg";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-3/5 flex justify-center items-center relative">
      <img
        className="object-cover lg:w-4/5 lg:h-4/5 ml-4 lg:ml-24"
        src={headshot}
        alt="bannerImg"
      />
      <div className=""></div>
    </div>
  );
};

export default RightBanner;
