import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className="mx-auto px-5 max-w-screen-lg pt-24 md:pt-28 pb-14 md:pb-24 flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-3">
      <figure className="bg-gray snav flex flex-col items-center rounded-md pb-5 cursor-pointer md:basis-1/3 snav">
        <img
          src="/assets/shared/desktop/imageheadphones.png"
          alt="imageheadphones"
          className="w-[120px] -mt-11"
        />

        <p className="text-black font-bold tracking-wider mb-4">HEADPHONES</p>
        <Link href="/headphones">
          <a className="font-semibold tracking-wider text-sm text-black/70 group">
            SHOP{" "}
            <span className="ml-2">
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </span>
          </a>
        </Link>
      </figure>

      <figure className="bg-gray snav flex flex-col items-center rounded-md pb-5 cursor-pointer md:basis-1/3 snav">
        <img
          src="/assets/shared/desktop/imagespeakers.png"
          alt="imageheadphones"
          className="w-[120px] -mt-11"
        />

        <p className="text-black font-bold tracking-wider mb-4">SPEAKERS</p>
        <Link href="/speakers">
          <a className="font-semibold tracking-wider text-sm text-black/70 group">
            SHOP{" "}
            <span className="ml-2">
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </span>
          </a>
        </Link>
      </figure>

      <figure className="bg-gray snav flex flex-col items-center rounded-md pb-5 cursor-pointer md:basis-1/3 snav">
        <img
          src="/assets/shared/desktop/imageearphones.png"
          alt="imageheadphones"
          className="w-[120px] -mt-11"
        />

        <p className="text-black font-bold tracking-wider mb-4">EARPHONES</p>
        <Link href="/earphones">
          <a className="font-semibold tracking-wider text-sm text-black/70 group">
            SHOP{" "}
            <span className="ml-2">
              <img src="/assets/shared/desktop/icon-arrow-right.svg" />
            </span>
          </a>
        </Link>
      </figure>
    </div>
  );
}

export default Nav;