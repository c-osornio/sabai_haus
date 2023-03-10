import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
import LayoutHeader from "../header/LayoutHeader";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          Hotelina - Luxury Hotel and Suits Booking React NextJs Template
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="assets/images/bg/sm-logo.png" />
      </Head>
      <LayoutHeader />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
