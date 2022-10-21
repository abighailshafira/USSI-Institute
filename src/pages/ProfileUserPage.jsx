import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import UserTable from "../components/ProfileUser/UserTable";

const ProfileUserPage = () => {
  return (
    <>
      <NavBar />
      <UserTable />
      <Footer />
    </>
  );
};

export default ProfileUserPage;
