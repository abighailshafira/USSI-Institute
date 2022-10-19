import React from "react";
import About from "../components/About";
import Divisi from "../components/Divisi";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import History from "../components/History";
import Info from "../components/Info";
import NavBar from "../components/NavBar";
import Pelatihan from "../components/Pelatihan";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Divisi />
      <Pelatihan />
      <Info />
      <Gallery />
      <History />
    </>
  );
};

export default Home;
