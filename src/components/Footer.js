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
    <footer className="bg-black px-5">
      <div className="mx-auto max-w-screen-lg text-white relative text-center pt-11">
        <span className="relative">
          <span className="absolute w-full h-[3px] bg-orange top-[-47px]" />
          <img
            src="/assets/shared/desktop/logo.svg"
            alt="audiophile logo"
            width={115}
          />
        </span>

        <div className="flex justify-center mt-9 pt-1">
          <ul className="">
            {links.map((link) => (
              <li key={link.name} className="mb-5">
                <Link href={link.path}>
                  <a
                    className={`uppercase text-sm hover:text-orange tracking-[2px] ${
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
      </div>
    </footer>
  );
}

export default Footer;
