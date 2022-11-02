import React, { useEffect, useState } from "react";
import Banner from "../src/components/Banner";
import { getprodcategory } from "../lib/productcategory";
import { Useviewwidth, useviewwidth } from "../lib/useviewwidth";
import Link from "next/link";

function headphones() {
  const Viewport = Useviewwidth();

  return (
    <>
      <Banner text="HEADPHONES" />
      <div className="px-5 py-1 xs:px-6 md:px-10 lg:px-5">
        <div className="max-w-screen-lg mx-auto pt-6 pb-7 space-y-5 lg:pb-20">
          <div className="lg:flex py-4 md:py-8 lg:py-10">
            <div className="lg:basis-[47.5%]">
              <img
                src={
                  Viewport < 640
                    ? "/assets/category-headphones/mobile/image-xx99-mark-two.jpg"
                    : Viewport >= 1024
                    ? "/assets/category-headphones/desktop/marktwo.jpg"
                    : "/assets/category-headphones/tablet/image-xx99-mark-two.jpg"
                }
                className="w-full"
                alt="marktwo"
              />
            </div>
            <div className="text-center px-2 sm:px-10 lg:my-auto lg:text-left lg:px-0 lg:pl-20 lg:basis-[47.5%]">
              <h3 className="text-3xl mt-4 mb-3 lg:text-4xl">
                XX99 MARK II <br /> HEADPHONES
              </h3>
              <p className="mb-8 lg:mb-9">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </p>
              <Link href="/product/xx99-mark-two-headphones">
                <a className="px-6 py-3 mt-4 text-sm bg-orange tracking-[1px] text-white font-bold ">
                  SEE PRODUCT
                </a>
              </Link>
            </div>
          </div>
          <div className="lg:flex py-4 md:py-8 lg:py-10">
            <div className="lg:basis-[47.5%]">
              <img
                src={
                  Viewport < 640
                    ? "/assets/category-headphones/mobile/image-xx99-mark-one.jpg"
                    : Viewport >= 1024
                    ? "/assets/category-headphones/desktop/markone.jpg"
                    : "/assets/category-headphones/tablet/image-xx99-mark-one.jpg"
                }
                className="w-full"
                alt="markone"
              />
            </div>
            <div className="text-center px-2 sm:px-10 lg:my-auto lg:text-left lg:px-0 lg:-order-1 lg:basis-[47.5%] lg:pr-20">
              <h3 className="text-3xl mt-4 mb-3 lg:text-4xl">
                XX99 MARK I <br /> HEADPHONES
              </h3>
              <p className="mb-8 lg:mb-9">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go
              </p>
              <Link href="/product/xx99-mark-one-headphones">
                <a className="px-6 py-3 mt-4 text-sm bg-orange tracking-[1px] text-white font-bold ">
                  SEE PRODUCT
                </a>
              </Link>
            </div>
          </div>

          <div className="lg:flex py-4 pb-8 md:py-8 lg:py-10">
            <div className="lg:basis-[47.5%]">
              <img
                src={
                  Viewport < 640
                    ? "/assets/category-headphones/mobile/image-xx59.jpg"
                    : Viewport >= 1024
                    ? "/assets/category-headphones/desktop/markthree.jpg"
                    : "/assets/category-headphones/tablet/image-xx59.jpg"
                }
                className="w-full"
                alt="markthree.jpg"
              />
            </div>
            <div className="text-center px-2 sm:px-10 lg:my-auto lg:text-left lg:px-0 lg:pl-20 lg:basis-[47.5%]">
              <h3 className="text-3xl mt-4 mb-3 lg:text-4xl">
                XX59 <br /> HEADPHONES
              </h3>
              <p className="mb-8 lg:mb-9">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </p>
              <Link href="/product/xx59-headphones">
                <a className="px-6 py-3 mt-4 text-sm bg-orange tracking-[1px] text-white font-bold ">
                  SEE PRODUCT
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default headphones;
