import Link from "next/link";
import React from "react";
import { Useviewwidth } from "../../lib/useviewwidth";
import Button from "./Button";

function Hero() {
  const Viewport = Useviewwidth;
  return (
    // <section className="h-screen bg-black w-screen bg-[url('../public/home/mobile/image-header.jpg')] md:bg-[url('../public/home/tablet/image-header.jpg')] lg:bg-[url('../public/home/desktop/image-hero.jpg')] bg-no-repeat bg-center">
    //   <div className=" mx-auto max-w-screen-lg h-full flex items-center justify-center text-center lg:justify-start lg:text-left">
    //     <div className="max-w-sm">
    //       <p className="tracking-[8px] text-gray/50 mb-6 font-normal">
    //         NEW PRODUCT
    //       </p>
    //       <h1 className="text-gray mb-6 text-3xl md:text-5xl tracking-wider">
    //         XX99 MARK II <br /> HEADPHONE
    //       </h1>
    //       <p className="mb-12 text-gray">
    //         Experience natural, lifelike audio and exceptional build quality
    //         made for the passionate music enthusiast.
    //       </p>
    //       <Button href="/product/xx99-mark-two-headphones" name="see product" />
    //     </div>
    //   </div>
    // </section>
    <section className="h-screen w-full bg-[url('../public/home/mobile/image-header.jpg')] md:bg-[url('../public/home/tablet/image-header.jpg')] lg:bg-[url('../public/home/desktop/image-hero.jpg')] bg-cover bg-no-repeat bg-center">
      <div className=" mx-auto max-w-screen-lg h-full w-full flex items-center justify-center text-center lg:justify-start lg:text-left">
        <div className="max-w-sm space-y-6">
          <p className="tracking-[8px] text-gray/50 font-normal">NEW PRODUCT</p>

          <h1 className="text-gray text-3xl md:text-5xl tracking-wider">
            XX99 MARK II <br /> HEADPHONE
          </h1>

          <p className="text-gray leading-6">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button href="/product/xx99-mark-two-headphones" name="see product" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
