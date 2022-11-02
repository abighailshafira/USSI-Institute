import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Divisi from "../components/Home/Divisi";
import Pelatihan from "../components/Home/Pelatihan";
import Info from "../components/Home/Info";
import Gallery from "../components/Home/Gallery";
import History from "../components/Home/History";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingButton from "../components/FloatingButton";

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
      {/* <NavBar theme="dark" /> */}
      <NavBar />
      <Hero />
      <About />
      <Divisi />
      <Pelatihan data={data} />
      <Info />
      <Gallery />
      <History />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Home;
