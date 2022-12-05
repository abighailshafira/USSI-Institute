import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Home/Hero";
import About from "../components/Home/About";
import Divisi from "../components/Home/Divisi";
import Pelatihan from "../components/Home/Pelatihan";
import Gallery from "../components/Home/Gallery";
import History from "../components/Home/History";
import Footer from "../components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FloatingButton from "../components/FloatingButton";
import axios from "axios";
import { useSelector } from "react-redux";

const Home = () => {
  const [pelatihan, setPelatihan] = useState([]);

  const admin = useSelector((state) => state.auth.role);

  console.log(admin);

  useEffect(() => {
    getSchedule();
  }, []);

  const getSchedule = async () => {
    await axios.get(`http://localhost:5000/api/v1/detail/training`).then((res) => {
      const getData = res.data.data;
      console.log(getData);
      setPelatihan(getData);
    });
  };

  return (
    <>
      <NavBar theme="dark" />
      <Hero />
      <About />
      <Divisi />
      <Pelatihan pelatihan={pelatihan} />
      <Gallery />
      <History />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Home;
