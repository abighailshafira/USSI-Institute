import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DetailDivisi from "../components/DetailDivisi/DetailDivisi";
import FloatingButton from "../components/FloatingButton";

const DetailDivisiPage = () => {
  return (
    <>
      <NavBar />
      <DetailDivisi />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default DetailDivisiPage;
