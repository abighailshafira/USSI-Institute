import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import UssiInstitute from "../components/DetailDivisi/UssiInstitute";
import FloatingButton from "../components/FloatingButton";

const UssiInstitutePage = () => {
  return (
    <>
      <NavBar />
      <UssiInstitute />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default UssiInstitutePage;
