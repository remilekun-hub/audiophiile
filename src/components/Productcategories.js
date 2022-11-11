import Link from "next/link";
import React from "react";
import { Useviewwidth, useviewwidth } from "../../lib/useviewwidth";

function Productcategories() {
  const Viewport = Useviewwidth();
  return (
    <section className="px-5 xs:px-6 md:px-10 lg:px-5">
      <div className=" space-y-5 xs:space-y-7  md:space-y-6 mx-auto max-w-screen-lg pt-8 pb-16">
        <div className="text-center bg-orange py-11 space-y-6 rounded-md bg-[url('../public/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-top bg-contain">
          <img
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt="zx9-speaker"
            className="w-24 h-full"
          />
          <div className="px-3 text-center">
            <h3 className="text-white">
              ZX9 <br /> SPEAKER
            </h3>
            <p className="mb-8 max-w-sm mx-auto">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link href="">
              <a className="bg-black text-sm hover:bg-black/10 text-white py-3 px-5 tracking-[1px] font-semibold md:px-6 lg:px-8">
                SEE PRODUCT
              </a>
            </Link>
          </div>
        </div>
        <div className="rounded-md py-28 px-5 md:px-11 bg-[url('../public/assets/home/mobile/image-speaker-zx7.jpg')] sm:bg-[url('../public/assets/home/tablet/image-speaker-zx7.jpg')] md:py-36 lg:bg-[url('../public/assets/home/desktop/image-speaker-zx7.jpg')] lg:py-28 bg-no-repeat bg-cover bg-center">
          <h3 className="mb-10 tracking-[2px] text-2xl md:text-3xl text">
            ZX7 SPEAKER
          </h3>
          <Link href="">
            <a className="bg-transparent border text-sm hover:bg-black/10 text-black border-black border-solid font-semibold py-3 px-5 tracking-[1px]  md:px-6 md:px-6 lg:px-8">
              SEE PRODUCT
            </a>
          </Link>
        </div>

        <div className="space-y-4 sm:grid sm:grid-cols-2 sm:space-y-0 gap-x-3 lg:gap-x-5">
          <img
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="yx1-earphones"
            className="w-full h-full rounded-md object-cover"
          />
          <div className="bg-gray py-7 rounded-md px-5 pb-11 sm:px-9 sm:py-20 lg:px-16">
            <h3 className="mb-9 tracking-[2px] text-2xl md:text-3xl ">
              YX1 EARPHONES
            </h3>
            <Link href="">
              <a className="bg-transparent  text-sm border text-black hover:bg-black/10 border-black border-solid font-semibold py-3 px-5 tracking-[1px] md:px-6 lg:px-8">
                SEE PRODUCT
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productcategories;
