import React from "react";
import { getprodcategory, getprodcategpory } from "../lib/productcategory";
import Banner from "../src/components/Banner";

function speakers({ category }) {
  return (
    <div>
      <Banner text="speakers" />
      speakers
    </div>
  );
}

export default speakers;

// export const getStaticProps = async (ctx) => {
//   const category = await getprodcategory("speakers");
//   return {
//     props: {
//       category,
//     },
//   };
// };
