import React from "react";
import { Usemycontext } from "./context/Context";

function Cartmodal() {
  const { dispatch } = Usemycontext();

  return (
    <div
      className="bg-black/60 fixed h-screen w-full  top-0 z-30 "
      onClick={() => dispatch({ type: "TOGGLE_CART_MODAL" })}
    >
      <div className="max-w-screen-lg mx-auto relative w-full h-full ">
        <div
          className="absolute top-[70px] h-20 right-0 bg-white rounded-md"
          onClick={(e) => e.stopPropagation()}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, odit?
        </div>
      </div>
    </div>
  );
}

export default Cartmodal;
