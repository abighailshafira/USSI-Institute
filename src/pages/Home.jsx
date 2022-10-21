import React from "react";
import About from "../components/About";
import Divisi from "../components/Divisi";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import History from "../components/History";
import Info from "../components/Info";
import NavBar from "../components/NavBar";
import Pelatihan from "../components/Pelatihan";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const data = [
    {
      id: 1,
      training_name: "Pelatihan Januari",
      category: "Web Design",
    },
    {
      id: 2,
      training_name: "Pelatihan Februari",
      category: "Web Development",
    },
    {
      id: 3,
      training_name: "Pelatihan Maret",
      category: "App Design",
    },
    {
      id: 4,
      training_name: "Pelatihan April",
      category: "App Development",
    },
    {
      id: 5,
      training_name: "Pelatihan Mei",
      category: "Web Design",
    },
    {
      id: 6,
      training_name: "Pelatihan Juni",
      category: "Web Development",
    },
    {
      id: 7,
      training_name: "Pelatihan Juli",
      category: "App Design",
    },
    {
      id: 8,
      training_name: "Pelatihan Agustus",
      category: "App Development",
    },
    {
      id: 9,
      training_name: "Pelatihan September",
      category: "Web Design",
    },
    {
      id: 10,
      training_name: "Pelatihan Oktober",
      category: "Web Development",
    },
    {
      id: 11,
      training_name: "Pelatihan November",
      category: "App Design",
    },
    {
      id: 12,
      training_name: "Pelatihan Desember",
      category: "Web Design",
    },
  ];
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Divisi />
      <Pelatihan data={data} />
      <Info />
      <Gallery />
      <History />
      <Footer />
    </>
  );
};

export default Home;
