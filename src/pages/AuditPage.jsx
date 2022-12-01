import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Audit from "../components/DetailDivisi/Audit";
import FloatingButton from "../components/FloatingButton";

const AuditPage = () => {
  return (
    <>
      <NavBar />
      <Audit />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default AuditPage;
