import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Usemycontext } from "./context/Context";

function Navbar() {
  const router = useRouter();
  const { dispatch, store } = Usemycontext();
  // const [localcart, setlocalcart] = useState([]);
  // useEffect(() => {
  //   setlocalcart(JSON.parse(localStorage.getItem("localcart")));
  // }, []);
  // console.log({ localcart });

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
      className={`w-full px-5 h-full sticky top-0 z-[30] ${
        router.pathname === "/" ? "bg-black/[0.9]" : "bg-black"
      }`}
    >
      <nav className=" mx-auto max-w-screen-lg flex justify-between py-6">
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
        <ul className="hidden lg:flex">
          {links.map((link) => (
            <li key={link.name} className="mr-8">
              <Link href={link.path}>
                <a
                  className={`uppercase hover:text-orange ${
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
          }}
        >
          <img src="/assets/shared/desktop/cart.svg" alt="cart" />
          {store.cart.length > 0 ? (
            <span className="bg-orange absolute h-4 w-4 rounded-full flex justify-center items-center font-bold -top-4 -right-2 text-xs text-black">
              {store.cart.length}
            </span>
          ) : (
            ""
          )}
        </div>
      </nav>
      {/* {router.pathname === "/" && (
        <hr className="max-w-screen-lg mx-auto w- bg-gray/90" />
      )} */}
    </header>
  );
}

export default Navbar;
