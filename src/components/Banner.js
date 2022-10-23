import React from "react";

const Banner = ({ text }) => {
  return (
    <p className="w-full py-5 text-center bg-black text-white uppercase text-3xl">
      {text}
    </p>
  );
};

export default Banner;
