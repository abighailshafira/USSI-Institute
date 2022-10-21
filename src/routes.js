import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import PendaftaranPage from "./pages/PendaftaranPage";
import DetailPelatihanPage from "./pages/DetailPelatihanPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfileUserPage from "./pages/ProfileUserPage";
import Home from "./pages/Home";

const RouteApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/profile" exact element={<ProfilePage />} />
        <Route path="/pendaftaran" exact element={<PendaftaranPage />} />
        <Route path="/detail-pelatihan" exact element={<DetailPelatihanPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/profile-user" exact element={<ProfileUserPage />} />
      </Routes>
    </>
  );
};

export default RouteApp;
