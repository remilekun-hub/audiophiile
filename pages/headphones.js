import React, { useEffect, useState } from "react";
import Banner from "../src/components/Banner";
import { getprodcategory } from "../lib/productcategory";
import { useviewwidth } from "../lib/useviewwidth";

function headphones({ category }) {
  return (
    <div>
      <Banner text="HEADPHONES" />
      headphones
    </div>
  );
}

export default headphones;
export const getStaticProps = async (ctx) => {
  const category = await getprodcategory("headphones");
  return {
    props: {
      category,
    },
  };
};
