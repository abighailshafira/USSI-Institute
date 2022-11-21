import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Pelatihan from "../components/Admin/Pelatihan";
import FloatingButton from "../components/FloatingButton";

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <Pelatihan />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default LoginPage;
