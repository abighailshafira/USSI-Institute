import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import JadwalPelatihanPage from "./pages/JadwalPelatihanPage";
import DetailPelatihanPage from "./pages/DetailPelatihanPage";
import PendaftaranPage from "./pages/PendaftaranPage";
import ContactPage from "./pages/ContactPage";
import ProfileUserPage from "./pages/ProfileUserPage";
import UIPage from "./pages/UIPage";
import AuditPage from "./pages/AuditPage";
import DashboardPage from "./pages/AdminPage";
import LembagaPage from "./components/Admin/Lembaga";
import PelatihanPage from "./components/Admin/Pelatihan";
import RekapPelatihanPage from "./components/Admin/RekapPelatihan";
import PesertaPage from "./components/Admin/Peserta";
import ProfileAdminPage from "./components/Admin/Profile";
import { useSelector } from "react-redux";

const RouteApp = () => {
  const [isAdmin, setIsAdmin] = useState();
  const role = useSelector((state) => state.auth.role);

  useEffect(() => {
    setIsAdmin(role);
  }, []);

  const adminRoute = (
    <>
      <Route path="/dashboard" exact element={<DashboardPage />} />
      <Route path="/dashboard/pelatihan" exact element={<PelatihanPage />} />
      <Route path="/dashboard/rekap-pelatihan" exact element={<RekapPelatihanPage />} />
      <Route path="/dashboard/lembaga" exact element={<LembagaPage />} />
      <Route path="/dashboard/peserta" exact element={<PesertaPage />} />
      <Route path="/dashboard/profile" exact element={<ProfileAdminPage />} />

      {/* <Route path="/tentang" exact element={<ProfilePage />} />
      <Route path="/jadwal-pelatihan" exact element={<JadwalPelatihanPage />} />
      <Route path="/detail-pelatihan/:id" exact element={<DetailPelatihanPage />} />
      <Route path="/pendaftaran" exact element={<PendaftaranPage />} />
      <Route path="/pendaftaran/:id" exact element={<PendaftaranPage />} />
      <Route path="/kontak" exact element={<ContactPage />} />
      <Route path="/profile-user" exact element={<ProfileUserPage />} />
      <Route path="/detail-divisi/audit" exact element={<AuditPage />} />
      <Route path="/detail-divisi/ussi-institute" exact element={<UIPage />} /> */}
    </>
  );

  const guestRoute = (
    <>
      <Route path="/tentang" exact element={<ProfilePage />} />
      <Route path="/jadwal-pelatihan" exact element={<JadwalPelatihanPage />} />
      <Route path="/detail-pelatihan/:id" exact element={<DetailPelatihanPage />} />
      <Route path="/pendaftaran" exact element={<PendaftaranPage />} />
      <Route path="/pendaftaran/:id" exact element={<PendaftaranPage />} />
      <Route path="/kontak" exact element={<ContactPage />} />
      <Route path="/detail-divisi/audit" exact element={<AuditPage />} />
      <Route path="/detail-divisi/ussi-institute" exact element={<UIPage />} />
    </>
  );

  const memberRoute = (
    <>
      <Route path="/tentang" exact element={<ProfilePage />} />
      <Route path="/jadwal-pelatihan" exact element={<JadwalPelatihanPage />} />
      <Route path="/detail-pelatihan/:id" exact element={<DetailPelatihanPage />} />
      <Route path="/pendaftaran" exact element={<PendaftaranPage />} />
      <Route path="/pendaftaran/:id" exact element={<PendaftaranPage />} />
      <Route path="/kontak" exact element={<ContactPage />} />
      <Route path="/profile-user" exact element={<ProfileUserPage />} />
      <Route path="/detail-divisi/audit" exact element={<AuditPage />} />
      <Route path="/detail-divisi/ussi-institute" exact element={<UIPage />} />
    </>
  );

  return (
    <>
      <Routes>
        {role === "admin" ? adminRoute : role === "member" ? memberRoute : guestRoute}

        <Route path="/" exact element={<Home />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/register" exact element={<RegisterPage />} />
        <Route path="/forgot-password" exact element={<ForgotPasswordPage />} />
        <Route path="*" exact element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default RouteApp;
