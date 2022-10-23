// import React, { useEffect } from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";
// import { Usemycontext } from "../../src/components/context/Context";
// import { Useviewwidth } from "../../lib/useviewwidth";
// import Button from "../../src/components/Button";

// function Product({ product }) {
//   const router = useRouter();
//   const singleproduct = product[0];
//   const {
//     dispatch,
//     store: { cart },
//   } = Usemycontext();
//   const Viewport = Useviewwidth();

//   return (
//     <div className="max-w-screen-lg mx-auto px-5">
//       <Head>
//         <title>{`Audiophile | ${singleproduct.name}`}</title>
//       </Head>
//       <span className="cursor-pointer" onClick={() => router.back()}>
//         Go back
//       </span>
//       <div className="flex flex-col sm:flex-row justify-between gap-x-10">
//         <div>
//           <img
//             className="w-full"
//             src={
//               Viewport < 640
//                 ? singleproduct.image.mobile
//                 : Viewport >= 1024
//                 ? singleproduct.image.desktop
//                 : singleproduct.image.tablet
//             }
//           />
//         </div>
//         <div className="flex items-center justify-center bg-orange">
//           <div className="">
//             <span className="uppercase bg-orange">new product</span>
//             <h1 className="uppercase font-extrabold tracking-wide">
//               {singleproduct.name}
//             </h1>
//             <p>{singleproduct.description}</p>
//             <h4>{singleproduct.price}</h4>
//             <button
//               onClick={() => {
//                 const prodindex = cart.find((c) => c.id === singleproduct.id);
//                 if (prodindex) {
//                   return;
//                 } else {
//                   dispatch({
//                     type: "ADD_TO_CART",
//                     payload: {
//                       id: singleproduct.id,
//                       name: singleproduct.name,
//                       price: singleproduct.price,
//                       image: singleproduct.image,
//                       quantity: 1,
//                     },
//                   });
//                 }
//               }}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="">
//         <div className="">
//           <h2 className="uppercase font-extrabold lg:text-3xl tracking-wide">
//             features
//           </h2>
//           <p>{singleproduct.features}</p>
//         </div>
//         <div>
//           <h2 className="uppercase font-extrabold lg:text-3xl tracking-wide">
//             in the box
//           </h2>
//           {singleproduct.includes?.map(({ quantity, item, i }) => (
//             <div key={i}>
//               <span className="text-orange">{`${quantity}X`}</span>{" "}
//               <span className="text-justify">{item}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//       <section className=" py-14 grid gap-4 grid-cols-1 sm:grid-cols-3 sm:h-[500px] lg:h-[600px] sm:grid-rows-2">
//         <figure>
//           <img
//             src={
//               Viewport < 640
//                 ? singleproduct.gallery.first.mobile
//                 : Viewport >= 1024
//                 ? singleproduct.gallery.first.desktop
//                 : singleproduct.gallery.first.tablet
//             }
//             alt={singleproduct.slug}
//             className="object-cover w-full  cursor-pointer h-full"
//             loading="lazy"
//           />
//         </figure>
//         <figure>
//           <img
//             src={
//               Viewport < 768
//                 ? singleproduct.gallery.second.mobile
//                 : viewport >= 1024
//                 ? singleproduct.gallery.second.desktop
//                 : singleproduct.gallery.second.tablet
//             }
//             alt={singleproduct.slug}
//             className="object-cover w-full h-full"
//             loading="lazy"
//           />
//         </figure>
//         <figure className="sm:col-start-2 sm:col-end-4 sm:row-start-1 sm:row-end-3">
//           <img
//             src={
//               Viewport < 640
//                 ? singleproduct.gallery.third.mobile
//                 : Viewport >= 1024
//                 ? singleproduct.gallery.third.desktop
//                 : singleproduct.gallery.third.tablet
//             }
//             alt={singleproduct.slug}
//             className="object-cover w-full  h-full"
//             loading="lazy"
//           />
//         </figure>
//       </section>
//       <section className="py-14">
//         <h1 className="uppercase text-center font-extrabold lg:text-3xl mb-6">
//           you may also like
//         </h1>
//         <div className="flex flex-col sm:flex-row gap-5 py-8">
//           {singleproduct.others.map((other) => (
//             <figure
//               key={other.name}
//               className="basis-1/3 flex flex-col items-center mb-5"
//             >
//               <img
//                 src={
//                   Viewport < 640
//                     ? other.image.mobile
//                     : Viewport >= 1024
//                     ? other.image.desktop
//                     : other.image.tablet
//                 }
//                 alt={other.slug}
//                 loading="lazy"
//                 className="w-full object-cover rounded-md"
//               />
//               <h4 className="text-center mt-6 mb-4 text-lg uppercase">
//                 {other.name}
//               </h4>
//               {/* <Link href={`/product/${other.slug}`}>
//                 <a>see prod</a>
//               </Link> */}
//               <Button name="see product" href={`/product/${other.slug}`} />
//             </figure>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Product;
// export const getStaticPaths = async () => {
//   const res = await fetch(`http://localhost:3000/api/products`);
//   const prods = await res.json();
//   const paths = prods.map((prod) => ({ params: { slug: prod.slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };
// export const getStaticProps = async ({ params }) => {
//   const res = await fetch(`http://localhost:3000/api/products/${params.slug}`);
//   const product = await res.json();

//   return {
//     props: {
//       product,
//     },
//   };
// };
