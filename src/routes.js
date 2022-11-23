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
import DashboardPage from "./pages/AdminPage";
import LembagaPage from "./components/Admin/Lembaga";
import PelatihanPage from "./components/Admin/Pelatihan";
import RekapPelatihanPage from "./components/Admin/RekapPelatihan";
import PesertaPage from "./components/Admin/Peserta";
import ProfileAdminPage from "./components/Admin/Profile";
import DetailDivisiPage from "./pages/DetailDivisiPage";
import PesertaPage from "./components/Admin/Peserta";

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
        <Route path="/detail-divisi" exact element={<DetailDivisiPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/profile-user" exact element={<ProfileUserPage />} />
        <Route path="/pelatihan" exact element={<Pelatihan />} />
        <Route path="/forgot-password" exact element={<ForgotPasswordPage />} />
        <Route path="/reset-password" exact element={<ResetPasswordPage />} />
        <Route path="/jadwal-pelatihan" exact element={<JadwalPelatihanPage />} />
        <Route path="/dashboard" exact element={<DashboardPage />} />
        <Route path="/dashboard/lembaga" exact element={<LembagaPage />} />
      </Routes>
    </>
  );
};

export default RouteApp;
