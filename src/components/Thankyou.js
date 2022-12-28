import React, { useEffect } from "react";
import { Usemycontext } from "./context/Context";
import { useRouter } from "next/router";

function Thankyou() {
  const { dispatch } = Usemycontext();
  useEffect(() => {
    document.body.classList.add("overflow-y-hidden");

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, []);

  const router = useRouter();
  return (
    <div className="h-screen overflow-y-hidden px-5 xs:px-6 w-full fixed top-0 bottom-0 left-0 flex items-center bg-black/50 z-[9000]">
      <div
        className="max-w-screen-lg mx-auto bg-white p-6 rounded-[3px]"
        onClick={(e) => e.stopPropagation()}
      >
        <span className="flex justify-center items-center w-8 h-8 bg-orange rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
        <h2 className="mt-4 font-bold text-[32px] leading-[33px]">
          THANK YOU <br /> FOR YOUR ORDER
        </h2>

        <div className="my-4">You will recieve a confirmation mail soon!.</div>
        <button
          className="p-3 bg-orange mt-6 w-full border-0 text-white font-semibold text-[16px] font-sans cursor-pointer"
          onClick={() => {
            dispatch({ type: "EMPTY_CART" });
            dispatch({ type: "TOGGLE_THANKYOU_MODAL" });
            router.push("/");
          }}
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}

export default Thankyou;
