import React from "react";
import Pelatihan from "../components/Home/Pelatihan";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

const JadwalPelatihanPage = () => {
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
      <Pelatihan />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default JadwalPelatihanPage;
