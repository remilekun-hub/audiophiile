import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Usemycontext } from "./context/Context";

function Navbar() {
  const router = useRouter();
  const { dispatch, store } = Usemycontext();

  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "headphones",
      path: "/headphones",
    },
    {
      name: "speakers",
      path: "/speakers",
    },
    {
      name: "earphones",
      path: "/earphones",
    },
  ];

  return (
    <header
      className={`w-full  h-full sticky top-0 z-[30] px-5 xs:px-6 md:px-10 lg:px-5 ${
        router.pathname === "/" ? "bg-black/[0.9]" : "bg-black"
      }`}
    >
      <nav
        className={`mx-auto
        max-w-screen-lg
        flex
        justify-between
        py-6
      ${
        router.pathname === "/" &&
        "border border-t-0 border-solid border-x-0 border-gray/50"
      }`}
      >
        <div
          className="border-none cursor-pointer lg:hidden"
          role="menu button"
        >
          <img src="/assets/shared/tablet/hamburger.svg" alt="hamburger" />
        </div>
        <Link href="/">
          <a className="md:flex-1 md:justify-start md:ml-9 lg:ml-0 lg:grow-0">
            <img
              src="/assets/shared/desktop/logo.svg"
              alt="audiophile logo"
              width={130}
            />
          </a>
        </Link>
        <ul className="hidden lg:flex lg:space-x-9">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>
                <a
                  className={`uppercase text-xs hover:text-orange tracking-[1.5px] lg:text-sm ${
                    router.pathname === link.path ? "text-orange" : "text-white"
                  }`}
                >
                  {link.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer relative"
          onClick={() => {
            dispatch({ type: "TOGGLE_CART_MODAL" });
            document.body.classList.add("overflow-y-hidden");
          }}
        >
          <img src="/assets/shared/desktop/cart.svg" alt="cart" />
          {store.cart.length > 0 && (
            <span className="bg-orange absolute h-4 w-4 rounded-full flex justify-center items-center font-bold -top-4 -right-2 text-xs text-black">
              {store.cart.length}
            </span>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
