import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Pelatihan from "../components/Home/Pelatihan";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

import axios from "axios";

const JadwalPelatihanPage = () => {
  const [pelatihan, setPelatihan] = useState([]);

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
      <NavBar />
      <Pelatihan pelatihan={pelatihan} />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default JadwalPelatihanPage;
