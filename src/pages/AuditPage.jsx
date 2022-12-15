import React from "react";
import NavBar from "../components/NavBar";
import FloatingButton from "../components/FloatingButton";
import Footer from "../components/Footer";
import DivisiAudit from "../components/DetailDivisi/DivisiAudit";

const AuditPage = () => {
  return (
    <>
      <NavBar />
      <DivisiAudit />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default AuditPage;
