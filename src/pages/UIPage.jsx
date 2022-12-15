import React from "react";
import NavBar from "../components/NavBar";
import DivisiUI from "../components/DetailDivisi/DivisiUI";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";

const UIPage = () => {
  return (
    <>
      <NavBar />
      <DivisiUI />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default UIPage;
