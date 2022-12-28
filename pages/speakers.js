import React from "react";
import { Useviewwidth } from "../lib/useviewwidth";
import Banner from "../src/components/Banner";
import Link from "next/link";
import Head from 'next/head';

function speakers() {
  const Viewport = Useviewwidth();
  return (
    <>
    <Head>
        <title>Audiophile - Speakers</title>
      </Head>
      <Banner text="speakers" />
      <section className="px-5 py-1 xs:px-6 md:px-10 lg:px-5 pb-7 md:pb-8">
        <div className="max-w-screen-lg mx-auto pt-6 pb-7 space-y-8 lg:pb-20">
          <div className="lg:flex py-4 md:py-8 lg:py-10">
            <div className="lg:basis-[50%]">
              <img
                src={
                  Viewport < 640
                    ? "/assets/category-speakers/mobile/image-zx7.jpg"
                    : Viewport >= 1024
                    ? "/assets/category-speakers/desktop/image-zx7.jpg"
                    : "/assets/category-speakers/tablet/image-zx7.jpg"
                }
                className="w-full"
                alt="zx7 speaker"
              />
            </div>
            <div className="text-center px-2 sm:px-10 lg:my-auto lg:text-left lg:px-0 lg:pl-20 lg:basis-[50%]">
              <h3 className="text-3xl mt-4 mb-3 lg:text-4xl">
                ZX7 <br /> SPEAKER
              </h3>
              <p className="mb-8 lg:mb-9">
                Stream high quality sound wirelessly with minimal to no loss.
                The ZX7 speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>
              <Link href="/product/xx99-mark-two-headphones">
                <a className="px-6 py-3 mt-4 text-sm bg-orange tracking-[1px] text-white font-semibold ">
                  SEE PRODUCT
                </a>
              </Link>
            </div>
          </div>
          <div className="lg:flex py-4 md:py-8 lg:py-10">
            <div className="lg:basis-[50%]">
              <img
                src={
                  Viewport < 640
                    ? "/assets/category-speakers/mobile/image-zx9.jpg"
                    : Viewport >= 1024
                    ? "/assets/category-speakers/desktop/image-zx9.jpg"
                    : "/assets/category-speakers/tablet/image-zx9.jpg"
                }
                className="w-full"
                alt="zx9 speaker"
              />
            </div>
            <div className="text-center px-2 sm:px-10 lg:my-auto lg:text-left lg:px-0 lg:-order-1 lg:basis-[50%] lg:pr-20">
              <h3 className="text-3xl mt-4 mb-3 lg:text-4xl">
                ZX9 <br /> SPEAKER
              </h3>
              <p className="mb-8 lg:mb-9">
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </p>
              <Link href="/product/xx99-mark-one-headphones">
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

export default speakers;
