import React from "react";
import About from "../components/About";
import Divisi from "../components/Divisi";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Divisi />
    </>
  );
};

export default Home;
