import Link from "next/link";
import React from "react";
import { Useviewwidth } from "../../lib/useviewwidth";
import Button from "./Button";

function Hero() {
  const Viewport = Useviewwidth;
  return (
    <section className="relative h-screen w-full lg:px-5 bg-[url('../public/home/mobile/image-header.jpg')] md:bg-[url('../public/home/tablet/image-header.jpg')] lg:bg-[url('../public/home/desktop/image-hero.jpg')] bg-cover bg-no-repeat bg-center">
      <div className=" mx-auto max-w-screen-lg h-full w-full flex items-center justify-center text-center lg:justify-start lg:text-left">
        <div className="max-w-sm pt-10 px-4 md:px-0">
          <p className="tracking-[4px] text-gray/50 font-normal mb-3">
            NEW PRODUCT
          </p>

          <h1 className="text-gray text-3xl md:text-5xl tracking-wider mb-3">
            XX99 MARK II <br /> HEADPHONE
          </h1>

          <p className="text-gray/70 leading-6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <div className="mt-7">
            <Button
              href="/product/xx99-mark-two-headphones"
              name="see product"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
