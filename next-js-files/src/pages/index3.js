import React, { useEffect, useState } from "react";
import About3 from "../components/about/About3";
import Banner3 from "../components/banner/Banner3";
import Facilites3 from "../components/facilities/Facilites3";
import Footer from "../components/footer/Footer";
import Header3 from "../components/header/Header3";
import GuestReview from "../components/home3/GuestReview";
import Home3RoomSuites from "../components/room/Home3RoomSuites";
import AccordianAndCounter from "../components/home4/AccordianAndCounter";
import Offer3 from "../components/offers/Offer3";
import Service3 from "../components/services/Service3";
import Home3Blog from "../components/blog/Home3BLogs";
import Home3Blogs from "../components/blog/Home3BLogs";
import Head from "next/head";
import Preloader from "../components/loader/Preloader";

function Homepage3() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(false);
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);
  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <Head>
            <title>
              Hotelina - Luxury Hotel and Suits Booking React NextJs Template
            </title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="assets/images/bg/sm-logo.png" />
          </Head>
          <Header3 />
          <Banner3 />
          <About3 />
          <Home3RoomSuites />
          <Service3 />
          <Facilites3 />
          <AccordianAndCounter />
          <Offer3 />
          <GuestReview />
          <Home3Blogs />
          <Footer />
        </>
      )}
    </>
  );
}

export default Homepage3;
