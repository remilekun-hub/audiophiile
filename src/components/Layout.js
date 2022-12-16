import React, { useEffect, useState } from "react";
import Cartmodal from "./Cartmodal";
import { Usemycontext } from "./context/Context";
import Footer from "./Footer";
import Mobilenav from "./Mobilenav";
import Navbar from "./Navbar";
import Thankyou from "./Thankyou";

function Layout({ children }) {
  const {
    store: { modalstate },
  } = Usemycontext();

  return (
    <div>
      <main className="bg-lightgray">
        <Navbar />
        {children}
      </main>
      {modalstate.cartmodal && <Cartmodal />}
      {modalstate.thankyou && <Thankyou />}
      <Mobilenav />
      <Footer />
    </div>
  );
}

export default Layout;
