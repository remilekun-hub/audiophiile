import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();
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
    <footer className="bg-black px-5 xs:px-6 md:px-10 md:pb-6 lg:px-5 ">
      <div className="mx-auto max-w-screen-lg text-white relative text-center pt-11 md:text-left">
        <span className="relative">
          <span className="absolute w-full h-[3px] bg-orange top-[-47px]" />
          <img
            src="/assets/shared/desktop/logo.svg"
            alt="audiophile logo"
            width={115}
          />
        </span>

        <div className="flex justify-center mt-9 pt-1 mb-2 md:justify-start md:mt-4 lg:justify-end lg:absolute top-5 right-0">
          <ul className="md:flex md:space-x-5 lg:space-x-7">
            {links.map((link) => (
              <li key={link.name} className="mb-5">
                <Link href={link.path}>
                  <a
                    className={`uppercase text-xs hover:text-orange tracking-[1.5px] lg:text-sm ${
                      router.pathname === link.path
                        ? "text-orange"
                        : "text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray/70 md:mb-14 lg:max-w-lg lg:mt-6">
          Audiophile is an all in one stop to fufill your audio needs. We are a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility, we are open 7 days a week.
        </p>
        <p className="text-gray/70 text-sm mt-6 md:mb-4">
          {" "}
          Copyright 2022. All Rights Reserved.
        </p>

        <div className="mt-7 space-x-5 pb-4 md:absolute right-0 -bottom-4 lg:bottom-10">
          <img
            src="/assets/shared/desktop/icon-facebook.svg"
            alt="facebookicon"
            className="social-icons cursor-pointer"
          />
          <img
            src="/assets/shared/desktop/icon-twitter.svg"
            alt="twittericon"
            className="social-icons cursor-pointer"
          />
          <img
            src="/assets/shared/desktop/icon-instagram.svg"
            alt="instagramicon"
            className="social-icons cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
