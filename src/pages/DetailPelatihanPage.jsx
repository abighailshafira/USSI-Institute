import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DetailPelatihan from "../components/DetailPelatihan/DetailPelatihan";
import FloatingButton from "../components/FloatingButton";

const DetailPelatihanPage = () => {
  return (
    <>
      <NavBar />
      <DetailPelatihan />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default DetailPelatihanPage;
