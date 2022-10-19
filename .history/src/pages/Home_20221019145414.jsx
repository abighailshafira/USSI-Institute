import React from "react";
import About from "../components/About";
import Divisi from "../components/Divisi";
import Hero from "../components/Hero";
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
    </>
  );
};

export default Home;
