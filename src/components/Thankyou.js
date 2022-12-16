import React from "react";
import { Usemycontext } from "./context/Context";

function Thankyou() {
  const {
    dispatch,
    store: { cart },
  } = Usemycontext();
  return (
    <div
      className="h-screen px-5 xs:px-6 w-full fixed top-0 bottom-0 left-0 flex items-center bg-black/50 z-[9000]"
      onClick={() => {
        dispatch({ type: "TOGGLE_THANKYOU_MODAL" });
        dispatch({ type: "EMPTY_CART" });
      }}
    >
      <div
        className="max-w-screen-lg mx-auto bg-orange cursor-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-[100px]">{cart.length}</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
          qui!
        </div>
      </div>
    </div>
  );
}

export default Thankyou;
