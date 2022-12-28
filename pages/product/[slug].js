import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Usemycontext } from "../../src/components/context/Context";
import { Useviewwidth } from "../../lib/useviewwidth";
import Button from "../../src/components/Button";
import Thebest from "../../src/components/Thebest";
import Link from "next/link";

function Product({ product }) {
  const router = useRouter();
  const singleproduct = product[0];
  const {
    dispatch,
    store: { cart },
  } = Usemycontext();

  const [quantity, setquantity] = useState(1);
  const Viewport = Useviewwidth();

  return (
    <section className="px-5 xs:px-6 md:px-10 lg:px-5">
      <div className="max-w-screen-lg mx-auto py-8">
        <Head>
          <title>{`Audiophile - ${singleproduct.name}`}</title>
        </Head>
        <span className="cursor-pointer my-14" onClick={() => router.back()}>
          Go back
        </span>
        <div className="flex flex-col sm:flex-row justify-between lg:gap-x-4 mt-3 md:mt-8 lg:mt-10">
          <div className="sm:basis-[40%] lg:basis-[50%]">
            <img
              className="w-full"
              src={
                Viewport < 640
                  ? singleproduct.image.mobile
                  : Viewport >= 1024
                  ? singleproduct.image.desktop
                  : singleproduct.image.tablet
              }
            />
          </div>
          <div className="flex items-center sm:basis-[60%] lg:basis-[50%] sm:pl-12 lg:pl-16 justify-center">
            <div className="">
              <div className="my-3">
                {singleproduct.new ? (
                  <span className="uppercase text-orange tracking-[7px] text-[15px] font-semibold">
                    new product
                  </span>
                ) : null}
              </div>
              <h1 className="text-[29px] sm:text-3xl uppercase font-extrabold tracking-wide mb-4 sm:mb-6 lg:mb-7  md:text-4xl lg:text-5xl">
                {singleproduct.name}
              </h1>
              <p className="mb-5 sm:mb-7">{singleproduct.description}</p>
              <h4 className="mb-5 sm:mb-8 lg:text-[18px]">
                ${singleproduct.price.toLocaleString("en-US")}
              </h4>
              <div className="flex space-x-4 lg:mt-8">
                <div className="flex bg-gray  justify-center items-center py-3 px-4">
                  <span
                    className="font-bold text-black/40 cursor-pointer"
                    onClick={() => {
                      if (quantity === 1) return;
                      else {
                        setquantity((q) => q - 1);
                      }
                    }}
                  >
                    -
                  </span>
                  <span className="px-5 font-bold md:px-6 lg:px-8">
                    {quantity}
                  </span>
                  <span
                    className="font-bold text-black/40 cursor-pointer"
                    onClick={() => setquantity((q) => q + 1)}
                  >
                    +
                  </span>
                </div>

                <span
                  onClick={() => {
                    const prodindex = cart.find(
                      (c) => c.id === singleproduct.id
                    );
                    if (prodindex) {
                      return;
                    } else {
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: {
                          id: singleproduct.id,
                          name: singleproduct.name,
                          cartname: singleproduct.cartname,
                          price: singleproduct.price,
                          image: singleproduct.image,
                          quantity,
                        },
                      });
                      setquantity(1);
                    }
                  }}
                  className="cursor-pointer uppercase bg-orange text-white text-sm font-semibold outline-none border-0 px-4 py-3 md:px-6 lg:px-8 tracking-[1px]"
                >
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7 py-6 md:mt-12 lg:flex lg:mt-20">
          <div className="mb-7 lg:basis-[50%]">
            <h2 className="uppercase mb-4 lg:mb-5 font-extrabold lg:text-3xl tracking-wide">
              features
            </h2>
            <p>{singleproduct.features}</p>
          </div>
          <div className="md:flex lg:block lg:pl-24">
            <h2 className="uppercase mb-4 lg:mb-5 font-extrabold lg:text-3xl tracking-wide md:basis-[46%]">
              in the box
            </h2>
            <div className="md:basis-[54%]">
              {singleproduct.includes?.map(({ quantity, item, i }) => (
                <div key={i} className="mb-1">
                  <span className="text-orange font-semibold mr-4">{`${quantity}X`}</span>{" "}
                  <span className="text-justify">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className=" py-14 grid gap-4 grid-cols-1 sm:grid-cols-3 sm:h-[500px] lg:h-[600px] sm:grid-rows-2">
          <figure>
            <img
              src={
                Viewport < 640
                  ? singleproduct.gallery.first.mobile
                  : Viewport >= 1024
                  ? singleproduct.gallery.first.desktop
                  : singleproduct.gallery.first.tablet
              }
              alt={singleproduct.slug}
              className="object-cover w-full  cursor-pointer h-full rounded-md"
              loading="lazy"
            />
          </figure>
          <figure>
            <img
              src={
                Viewport < 768
                  ? singleproduct.gallery.second.mobile
                  : Viewport >= 1024
                  ? singleproduct.gallery.second.desktop
                  : singleproduct.gallery.second.tablet
              }
              alt={singleproduct.slug}
              className="object-cover w-full h-full rounded-md"
              loading="lazy"
            />
          </figure>
          <figure className="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-3">
            <img
              src={
                Viewport < 640
                  ? singleproduct.gallery.third.mobile
                  : Viewport >= 1024
                  ? singleproduct.gallery.third.desktop
                  : singleproduct.gallery.third.tablet
              }
              alt={singleproduct.slug}
              className="object-cover w-full  h-full rounded-md"
              loading="lazy"
            />
          </figure>
        </section>
        <section className="py-14">
          <h1 className="uppercase text-center font-extrabold text-2xl md:text-3xl lg:text-4xl mb-6">
            you may also like
          </h1>
          <div className="flex flex-col sm:flex-row gap-5 py-4">
            {singleproduct.others.map((other) => (
              <figure
                key={other.name}
                className="basis-1/3 flex flex-col items-center mb-5"
              >
                <img
                  src={
                    Viewport < 640
                      ? other.image.mobile
                      : Viewport >= 1024
                      ? other.image.desktop
                      : other.image.tablet
                  }
                  alt={other.slug}
                  loading="lazy"
                  className="w-full object-cover rounded-md"
                />
                <h4 className="text-center mt-6 text-lg uppercase">
                  {other.name}
                </h4>
                {/* <Link href={`/product/${other.slug}`}>
                <a>see prod</a>
              </Link> */}
                <Button name="see product" href={`/product/${other.slug}`} />
              </figure>
            ))}
          </div>
        </section>
        {/* <div className=" pt-8 md:pb-24 flex flex-col md:flex-row space-y-14 md:space-y-0 md:space-x-4 lg:space-x-5">
          <figure className="bg-gray snav flex flex-col items-center rounded-md pb-5 cursor-pointer md:basis-1/3 snav">
            <img
              src="/assets/shared/desktop/imageheadphones.png"
              alt="imageheadphones"
              className="w-[140px] -mt-11"
            />

            <p className="text-black font-bold tracking-wider mb-4">
              HEADPHONES
            </p>
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
              className="w-[140px] -mt-11"
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
              className="w-[140px] -mt-11"
            />

            <p className="text-black font-bold tracking-wider mb-4">
              EARPHONES
            </p>
            <Link href="/earphones">
              <a className="font-semibold tracking-wider text-sm text-black/70 group">
                SHOP{" "}
                <span className="ml-2">
                  <img src="/assets/shared/desktop/icon-arrow-right.svg" />
                </span>
              </a>
            </Link>
          </figure>
        </div> */}

        <div className="flex flex-col gap-y-7 lg:flex-row md:py-5 lg:pt-7 md:pb-14 lg:pb-20 pb-9">
          <div className="text-center basis-[52%] lg:text-left lg:pr-24 my-auto">
            <h2 className="text-[26px] md:text-4xl md:max-w-[500px] md:mx-auto mb-4 lg:text-4xl ">
              BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO
              GEAR
            </h2>
            <p className="sm:max-w-xl sm:mx-auto">
              Located at the heart of New York city, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipments.
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
      </div>
    </section>
  );
}

export default Product;
export const getStaticPaths = async () => {
  const res = await fetch(`https://audiophileapi.vercel.app/api/products`);
  const prods = await res.json();
  const paths = prods.map((prod) => ({ params: { slug: prod.slug } }));

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://audiophileapi.vercel.app/api/products/${params.slug}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
};
