import React from "react";
import { Usemycontext } from "./context/Context";
import { useRouter } from "next/router";

function Cartmodal() {
  const {
    dispatch,
    store: { cart },
  } = Usemycontext();

  const router = useRouter();

  return (
    <div
      className="bg-black/60 fixed h-screen w-full  top-0 z-30 px-5 xs:px-6 md:px-10 lg:px-5 "
      onClick={() => {
        dispatch({ type: "TOGGLE_CART_MODAL" });
        document.body.classList.remove("overflow-y-hidden");
      }}
    >
      <div className="max-w-screen-lg mx-auto lg:relative">
        <div
          className="rounded-md p-4 xs:p-5 relative top-[100px] bg-white w-full xs:w-[290px] mx-auto md:absolute md:top-[100px] md:right-10 md:w-[350px] lg:right-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between">
            <span className="font-bold">Cart ({cart.length})</span>{" "}
            <span
              onClick={() => dispatch({ type: "EMPTY_CART" })}
              className="cursor-pointer"
            >
              Remove all
            </span>
          </div>
          <div className="max-h-48 md:h-auto overflow-y-auto">
            {cart.length > 0 &&
              cart.map((x) => (
                <div className="mb-1 flex" key={x.id}>
                  <div>
                    <img
                      src={x.image.mobile}
                      alt={x.cartname}
                      className="w-12 h-12 rounded-md"
                    />
                  </div>
                  <div className="pl-3 w-full flex justify-between items-center">
                    <div></div>
                    <div>btn here</div>
                  </div>
                </div>
              ))}
          </div>
          <div>
            {cart.length > 0 ? (
              <button
                className={`bg-orange font-bold p-3 w-full text-white outline-none border-none cursor-pointer disabled:bg-black`}
                onClick={() => {
                  router.push("/checkout");
                  dispatch({ type: "TOGGLE_CART_MODAL" });
                  document.body.classList.remove("overflow-y-hidden");
                }}
              >
                CHECKOUT
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartmodal;
