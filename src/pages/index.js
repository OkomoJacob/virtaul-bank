import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {
  homeObjectFour,
  homeObjectOne,
  homeObjectThree,
  homeObjectTwo,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleNavbar={toggleNavbar} />
      <Navbar toggleNavbar={toggleNavbar} />
      <HeroSection />
      <InfoSection {...homeObjectOne} />
      <InfoSection {...homeObjectTwo} />
      <InfoSection {...homeObjectThree} />
      <Services />
      <InfoSection {...homeObjectFour} />
      <Footer />
    </>
  );
};

export default Home;
