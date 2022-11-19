import React from "react";
import { Useviewwidth } from "../lib/useviewwidth";
import Banner from "../src/components/Banner";
import Link from "next/link";

function earphones() {
  const Viewport = Useviewwidth();
  return (
    <>
      <Banner text="EARPHONES" />
      <section className="px-5 xs:px-6 md:px-10 lg:px-5">
        <div className="max-w-screen-lg mx-auto pt-6 pb-14 lg:pb-20">
          <div className="lg:flex py-4 md:py-8 lg:py-10">
            <div className="lg:basis-[50%]">
              <img
                src={
                  Viewport < 640
                    ? "/assets/category-earphones/mobile/image-yx1-earphones.jpg"
                    : Viewport >= 1024
                    ? "/assets/category-earphones/desktop/earphoneDesktop.jpg"
                    : "/assets/category-earphones/tablet/image-yx1-earphones.jpg"
                }
                className="w-full"
                alt="yx1 earphone"
              />
            </div>
            <div className="text-center px-2 sm:px-10 lg:my-auto lg:text-left lg:px-0 lg:pl-20 lg:basis-[50%]">
              <h3 className="text-3xl mt-4 mb-3 lg:text-4xl">
                YX1 <br /> EARPHONES
              </h3>
              <p className="mb-8 lg:mb-9">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>
              <Link href="/product/yx1-earphones">
                <a className="px-6 py-3 mt-4 text-sm bg-orange tracking-[1px] text-white font-semibold ">
                  SEE PRODUCT
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default earphones;
