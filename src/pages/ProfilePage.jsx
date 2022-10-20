import React from "react";
import Profile from "../components/Profile/Profile";
import Team from "../components/Profile/Team";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const ProfilePage = () => {
  return (
    <>
      <NavBar />
      <Profile />
      <Team />
      <Footer />
    </>
  );
};

export default ProfilePage;
