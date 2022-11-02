import React from "react";

const Banner = ({ text }) => {
  return (
    <p className="w-full py-6 lg:py-8 text-center bg-black text-white uppercase text-3xl md:text-4xl md:tracking-[5px]">
      {text}
    </p>
  );
};

export default Banner;
