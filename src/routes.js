import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage";
import PendaftaranPage from "./pages/PendaftaranPage";
import DetailPelatihanPage from "./pages/DetailPelatihanPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfileUserPage from "./pages/ProfileUserPage";
import Pelatihan from "./pages/Pelatihan";
import Home from "./pages/Home";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import JadwalPelatihanPage from "./pages/JadwalPelatihanPage";
import DaftarBprPage from "./pages/DaftarBpr";
import DashboardPage from "./pages/AdminPage";

const RouteApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<ContactPage />} />
        <Route path="/profile" exact element={<ProfilePage />} />
        <Route path="/pendaftaran" exact element={<PendaftaranPage />} />
        <Route path="/pendaftaran/:id" exact element={<PendaftaranPage />} />
        <Route path="/detail-pelatihan/:id" exact element={<DetailPelatihanPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/profile-user" exact element={<ProfileUserPage />} />
        <Route path="/pelatihan" exact element={<Pelatihan />} />
        <Route path="/forgot-password" exact element={<ForgotPasswordPage />} />
        <Route path="/reset-password" exact element={<ResetPasswordPage />} />
        <Route path="/jadwal-pelatihan" exact element={<JadwalPelatihanPage />} />
        <Route path="/daftar-bpr" exact element={<DaftarBprPage />} />
        <Route path="/dashboard" exact element={<DashboardPage />} />
      </Routes>
    </>
  );
};

export default RouteApp;
