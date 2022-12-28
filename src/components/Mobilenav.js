import React from "react";
import { Usemycontext } from "./context/Context";
import Link from "next/link";

function Mobilenav() {
  const {
    store: {
      modalstate: { mobilenav },
    },
  } = Usemycontext();
  return (
    <div
      className={`mobilenav px-5 xs:px-6 md:px-10  ${
        mobilenav ? "show" : null
      }`}
    >
      <div className="flex flex-col h-full pt-[50px] w-full items-center space-y-[30px]">
        <div className="pb-[10px] bg-gray w-full flex flex-col items-center cursor-pointer rounded-[6px]">
          <img
            src="/assets/shared/desktop/imageheadphones.png"
            alt="imageheadphones"
            className="w-[120px] -mt-5"
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
        </div>
        <div className="pb-[10px] bg-gray w-full flex flex-col items-center cursor-pointer rounded-[6px]">
          <img
            src="/assets/shared/desktop/imagespeakers.png"
            alt="imageheadphones"
            className="w-[120px] -mt-5"
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
        </div>
        <div className=" pb-[10px] bg-gray w-full flex flex-col items-center cursor-pointer rounded-[6px]">
          <img
            src="/assets/shared/desktop/imageearphones.png"
            alt="imageheadphones"
            className="w-[120px] -mt-5"
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
        </div>
      </div>
    </div>
  );
}

export default Mobilenav;
