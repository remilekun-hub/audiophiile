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
      <div className="max-w-screen-lg h-screen mx-auto lg:relative">
        <div
          className="rounded-md p-4 xs:p-5 relative top-[20%] bg-white w-full max-w-[400px] mx-auto md:absolute md:top-[100px] md:right-10 md:w-[380px] lg:right-0"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between border border-solid border-black/10 pb-3 border-x-0 border-t-0 border-b-1">
            <span className="font-bold">Cart ({cart.length})</span>{" "}
            {cart.length > 0 ? (
              <span
                onClick={() => dispatch({ type: "EMPTY_CART" })}
                className="cursor-pointer"
              >
                Remove all
              </span>
            ) : null}
          </div>
          <div className=" md:h-auto overflow-y-auto pt-2">
            {cart.length > 0 ? (
              cart.map((x) => (
                <div className="mb-4 flex" key={x.id}>
                  <div>
                    <img
                      src={x.image.mobile}
                      alt={x.cartname}
                      className="w-14 h-14 rounded-md"
                    />
                  </div>
                  <div className="pl-3 w-full flex justify-between items-center">
                    <div>
                      <span className="flex flex-1 text-black font-bold">
                        {x.cartname}
                      </span>
                      <span className="text-black/40 text-sm font-bold">
                        ${x.price.toLocaleString("en-US")}
                      </span>
                    </div>
                    <div className="flex bg-gray  justify-center items-center p-2">
                      {x.quantity === 1 ? (
                        <span
                          className="font-bold text-black/40 cursor-pointer mt-1"
                          aria-roledescription="button to remove item from cart"
                          role="remove button"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: { id: x.id },
                            })
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 text-black/40"
                          >
                            <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                            <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                          </svg>
                        </span>
                      ) : (
                        <span
                          className="font-bold text-black/40 cursor-pointer"
                          aria-roledescription="button to decrease item quantity"
                          role="decrease quantity button"
                          onClick={() =>
                            dispatch({
                              type: "DECREASE_QTY",
                              payload: { id: x.id },
                            })
                          }
                        >
                          -
                        </span>
                      )}
                      <span className="font-bold px-4">{x.quantity}</span>
                      <span
                        className="font-bold text-black/40 cursor-pointer"
                        aria-roledescription="button to increase item quantity"
                        role="increase quantity button"
                        onClick={() =>
                          dispatch({
                            type: "INCREASE_QTY",
                            payload: { id: x.id },
                          })
                        }
                      >
                        +
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center pt-3">your cart is empty</p>
            )}
          </div>
          <div>
            {cart.length > 0 ? (
              <input
                type="button"
                value="CHECKOUT"
                className={`bg-orange font-bold p-5 w-full text-white outline-none border-none cursor-pointer tracking-[1px] disabled:bg-black`}
                onClick={() => {
                  router.push("/checkout");
                  dispatch({ type: "TOGGLE_CART_MODAL" });
                  document.body.classList.remove("overflow-y-hidden");
                }}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cartmodal;
