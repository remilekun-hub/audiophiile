import React from "react";
import { Usemycontext } from "./context/Context";

function Mobilenav() {
  const {
    store: {
      modalstate: { mobilenav },
    },
  } = Usemycontext();
  return (
    <div
      className={`mobilenav text-white px-5 xs:px-6 md:px-10  ${
        mobilenav ? "show" : null
      }`}
    >
      Mobilenavvjgh
    </div>
  );
}

export default Mobilenav;
