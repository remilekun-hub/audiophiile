import React, { useEffect, useState } from "react";
import Cartmodal from "./Cartmodal";
import { Usemycontext } from "./context/Context";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }) {
  const {
    store: { modalstate, cart },
    dispatch,
  } = Usemycontext();

  useEffect(() => {
    localStorage.setItem("localcart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Navbar />
      <main className="bg-lightgray">{children}</main>
      {modalstate.cartmodal && <Cartmodal />}
      <Footer />
    </div>
  );
}

export default Layout;
