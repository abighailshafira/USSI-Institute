import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FormRegister from "../components/Register/FormRegister";
import FloatingButton from "../components/FloatingButton";

const RegisterPage = () => {
  return (
    <>
      <NavBar />
      <FormRegister />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default RegisterPage;
