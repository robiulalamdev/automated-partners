/* eslint-disable @next/next/no-img-element */
import React from "react";
import img from "../../assets/images/home/img.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-full">
      <Image
        className="w-full h-full max-w-[361px] max-h-[207.381px] mx-auto"
        src={img}
        alt=""
      />
    </div>
  );
};

export default Banner;
