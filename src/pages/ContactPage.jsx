import React from "react";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import FloatingButton from "../components/FloatingButton";

const ContactPage = () => {
  return (
    <>
      <NavBar />
      <Contact />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default ContactPage;
