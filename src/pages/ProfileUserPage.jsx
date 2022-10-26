import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import UserTable from "../components/ProfileUser/UserTable";
import TabelKeterangan from "../components/ProfileUser/TabelKeterangan";
import FloatingButton from "../components/FloatingButton";

const ProfileUserPage = () => {
  return (
    <>
      <NavBar />
      <UserTable />
      <TabelKeterangan />
      <FloatingButton />
      <Footer />
    </>
  );
};

export default ProfileUserPage;
