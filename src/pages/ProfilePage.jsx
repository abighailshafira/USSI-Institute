import React from "react";
import Profile from "../components/Profile/Profile";
import Team from "../components/Profile/Team";
import Trainer from "../components/Profile/Trainer";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProfilePage = () => {
  return (
    <>
      <NavBar />
      <Profile />
      <Team />
      <Trainer />
      <Footer />
    </>
  );
};

export default ProfilePage;
