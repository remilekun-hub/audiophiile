import Hero from "../src/components/Hero";
import Nav from "../src/components/Nav";
import Head from "next/head";
import Productcategories from "../src/components/Productcategories";
import Thebest from "../src/components/Thebest";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile: Audio web shop</title>
      </Head>
      <Hero />
      <Nav />
      <Productcategories />
      <Thebest />
    </div>
  );
}
