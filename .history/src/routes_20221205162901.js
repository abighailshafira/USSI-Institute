import React, { useEffect, useState } from "react";
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
import UssiInstitutePage from "./pages/UssiInstitutePage";
import AuditPage from "./pages/AuditPage";
import axios from "axios";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

const RouteApp = () => {
  const [isAdmin, setIsAdmin] = useState();

  console.log(localStorage.getItem("persist:auth"));
  // const admin = useSelector((state) => state.auth.accessToken);

  // const user = jwtDecode(admin);
  //   // console.log(user.role)
  //   setIsAdmin(user.role);

  const adminRoute = <>
    <Route path="/dashboard" exact element={<DashboardPage />} />
    <Route path="/dashboard/pelatihan" exact element={<PelatihanPage />} />
    <Route path="/dashboard/rekap-pelatihan" exact element={<RekapPelatihanPage />} />
    <Route path="/dashboard/lembaga" exact element={<LembagaPage />} />
    <Route path="/dashboard/peserta" exact element={<PesertaPage />} />
    <Route path="/dashboard/profile" exact element={<ProfileAdminPage />} />

    <Route path="/tentang" exact element={<ProfilePage />} />
    <Route path="/jadwal-pelatihan" exact element={<JadwalPelatihanPage />} />
    <Route path="/detail-pelatihan/:id" exact element={<DetailPelatihanPage />} />
    <Route path="/pendaftaran" exact element={<PendaftaranPage />} />
    <Route path="/pendaftaran/:id" exact element={<PendaftaranPage />} />
    <Route path="/kontak" exact element={<ContactPage />} />
    <Route path="/profile-user" exact element={<ProfileUserPage />} />
    <Route path="/detail-divisi/audit" exact element={<AuditPage />} />
    <Route path="/detail-divisi/ussi-institute" exact element={<UssiInstitutePage />} />
  </>

  const guestRoute = <>
    <Route path="/tentang" exact element={<ProfilePage />} />
    <Route path="/jadwal-pelatihan" exact element={<JadwalPelatihanPage />} />
    <Route path="/detail-pelatihan/:id" exact element={<DetailPelatihanPage />} />
    <Route path="/pendaftaran" exact element={<PendaftaranPage />} />
    <Route path="/pendaftaran/:id" exact element={<PendaftaranPage />} />
    <Route path="/kontak" exact element={<ContactPage />} />
    <Route path="/profile-user" exact element={<ProfileUserPage />} />
    <Route path="/detail-divisi/audit" exact element={<AuditPage />} />
    <Route path="/detail-divisi/ussi-institute" exact element={<UssiInstitutePage />} />
  </>

  return (
    <>
      <Routes>
        {/* {isAdmin ? adminRoute === "admin" : guestRoute} */}

        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/forgot-password" exact element={<ForgotPasswordPage />} />


        {/* <Route path="/tentang" exact element={<ProfilePage />} />
        <Route path="/jadwal-pelatihan" exact element={<JadwalPelatihanPage />} />
        <Route path="/detail-pelatihan/:id" exact element={<DetailPelatihanPage />} />
        <Route path="/pendaftaran" exact element={<PendaftaranPage />} />
        <Route path="/pendaftaran/:id" exact element={<PendaftaranPage />} />
        <Route path="/kontak" exact element={<ContactPage />} />
        <Route path="/profile-user" exact element={<ProfileUserPage />} />
        <Route path="/detail-divisi/audit" exact element={<AuditPage />} />
        <Route path="/detail-divisi/ussi-institute" exact element={<UssiInstitutePage />} /> */}
        {/* <Route path="/reset-password" exact element={<ResetPasswordPage />} /> */}

      </Routes>
    </>
  );
};

export default RouteApp;
