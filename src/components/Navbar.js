import React, { useEffect } from "react";
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
  useEffect(() => {
    const header = document.getElementById("header");
    window.addEventListener("scroll", () => {
      if (scrollY > 10) {
        header.classList.add("headerblur");
      } else {
        header.classList.remove("headerblur");
      }
    });
  }, []);

  return (
    <header
      id="header"
      className={`w-full px-5 xs:px-6 md:px-10 lg:px-5 ${
        router.pathname === "/"
          ? " fixed top-0 z-[30]"
          : "sticky top-0 z-[30] bg-black"
      }`}
    >
      <nav
        className={`mx-auto
        max-w-screen-lg
        flex
        items-center
        justify-between
        h-[75px]
      ${
        router.pathname === "/" &&
        "border border-t-0 border-solid border-x-0 border-gray/50 backdrop-blur-lg"
      }`}
      >
        <div
          className="border-none cursor-pointer lg:hidden"
          role="menu button"
        >
          <img
            src="/assets/shared/tablet/hamburger.svg"
            alt="hamburger"
            onClick={() => {
              dispatch({ type: "TOGGLE_MOBILE_NAV" });
            }}
          />
        </div>
        <Link href="/">
          <a className="md:flex-1 md:justify-start md:ml-9 lg:ml-0 lg:grow-0">
            <img
              src="/assets/shared/desktop/logo.svg"
              alt="audiophile logo"
              className="w-[130px] lg:w-[150px]"
            />
          </a>
        </Link>
        <ul className="hidden lg:flex lg:space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.path}>
                <a
                  className={`transnition-all duration-300 uppercase text-xs text-white hover:text-orange tracking-[1.5px] lg:text-[15px]`}
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
