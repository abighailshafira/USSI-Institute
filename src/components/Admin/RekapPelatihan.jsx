import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Space, DatePicker } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid } from "react-icons/hi";
import { FiHome, FiUser } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import TableRekapPelatihan from "./Table/TableRekapPelatihan";
import Logo from "../../assets/image/logo-ussi.png";
import Swal from "sweetalert2";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  // Handle Logout
  const handleLogout = () => {
    // jsCookie.remove('auth')
    localStorage.removeItem("persist:auth");
    var toastMixin = Swal.mixin({
      toast: true,
      icon: "success",
      title: "Title",
      animation: false,
      position: "top-right",
      showConfirmButton: false,
      timer: 800,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });
    toastMixin.fire({
      title: "Berhasil logout",
    });
    navigate("/");
    setTimeout(window.location.reload.bind(window.location), 1000);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} width={230} breakpoint="lg" collapsedWidth="100">
          <div className="logo">
            <Link to="/dashboard">
              <a className="py-6 flex justify-center">
                <img src={Logo} alt="USSI Institute" className="h-10" />
              </a>
            </Link>
          </div>

          <Menu mode="inline" theme="dark" defaultSelectedKeys={["rekapPelatihan"]}>
            <Menu.Item key="dashboard" icon={<FiHome />}>
              <Link to="/dashboard" />
              Dashboard
            </Menu.Item>
            <Menu.SubMenu title="Pelatihan" icon={<HiOutlineViewGrid />}>
              <Menu.Item key="pelatihan">
                <Link to="/dashboard/pelatihan" />
                Pelatihan
              </Menu.Item>
              <Menu.Item key="rekapPelatihan">
                <Link to="/dashboard/rekap-pelatihan" />
                Rekap Pelatihan
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="lembaga" icon={<HiOutlineOfficeBuilding />}>
              <Link to="/dashboard/lembaga" />
              Lembaga
            </Menu.Item>
            <Menu.Item key="peserta" icon={<TbCertificate />}>
              <Link to="/dashboard/peserta" />
              Peserta
            </Menu.Item>
            <Menu.SubMenu title="Pengguna" icon={<FiUser />}>
              <Menu.Item key="profil">
                <Link to="/dashboard/profile" />
                Profil
              </Menu.Item>
              <Menu.Item key="logout" onClick={handleLogout}>
                Keluar
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
            }}
          >
            <Menu mode="inline">
              <Space
                style={{
                  marginLeft: 20,
                }}
              >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                })}
              </Space>
            </Menu>
          </Header>

          <Content
            style={{
              margin: "5px 10px 0",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 20,
                minHeight: 644,
              }}
            >
              <div className="container p-3">
                <div className="dashboard-card">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h2 className="title font-semibold text-xl text-slate-800">Rekap Pelatihan</h2>
                    </div>
                    <div>
                      <DatePicker onChange={onChange} picker="year" placeholder="Pilih tahun" />
                    </div>
                  </div>

                  <TableRekapPelatihan />
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};
export default App;
