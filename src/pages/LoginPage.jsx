import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FormLogin from "../components/Login/FormLogin";
import FloatingButton from "../components/FloatingButton";

const LoginPage = () => {
  return (
    <>
      <NavBar />
      <FormLogin />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default LoginPage;
