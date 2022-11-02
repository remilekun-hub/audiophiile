import React from "react";
import { Useviewwidth } from "../../lib/useviewwidth";

function Thebest() {
  const Viewport = Useviewwidth();
  return (
    <section className="px-5 pb-5 md:pb-7 lg:pb-24 pt-2.5 md:pt-7 lg:pt-8 xs:px-6 md:px-10 lg:px-5">
      <div className="mx-auto  max-w-screen-lg flex flex-col gap-y-7 lg:flex-row">
        <div className="text-center basis-[52%] lg:text-left lg:pr-24 my-auto">
          <h2 className="text-[26px] md:text-4xl md:max-w-[500px] md:mx-auto mb-4 lg:text-4xl ">
            BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO
            GEAR
          </h2>
          <p className="sm:max-w-xl sm:mx-auto">
            Located at the heart of New York city, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio
            equipments.
          </p>
        </div>
        <div className="basis-[48%] -order-1 lg:order-1">
          <img
            className="w-full rounded-md object-cover"
            alt="gearimage"
            src={
              Viewport < 640
                ? "/assets/shared/mobile/mobilegear.jpg"
                : Viewport >= 1024
                ? "/assets/shared/desktop/gearimage.jpg"
                : "/assets/shared/tablet/tabgear.jpg"
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Thebest;
