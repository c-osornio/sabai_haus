import React from "react";
import Head from "next/head";
import Footer from "../footer/Footer";
// import LayoutHeader from "../header/LayoutHeader";
import Header3 from "../header/Header3";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>
          Sabai Haus
        </title>
        <meta name="description" content="Home for comfortable short term rentals" />
        <link rel="icon" href="assets/images/bg/sm-logo.png" />
      </Head>
      {/* <LayoutHeader /> */}
      <Header3/>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
