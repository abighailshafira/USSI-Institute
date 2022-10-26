import React from "react";

import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FormDaftar from "../components/Pendaftaran/FormDaftar";
import FloatingButton from "../components/FloatingButton";

const PendataranPage = () => {
  return (
    <>
      <NavBar />
      <FormDaftar />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default PendataranPage;
