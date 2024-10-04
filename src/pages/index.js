import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";

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
    </>
  );
};

export default Home;
