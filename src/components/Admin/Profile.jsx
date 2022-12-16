import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Form, Input, Layout, Menu, Space, Image, Button } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid } from "react-icons/hi";
import { FiHome, FiUser, FiChevronLeft } from "react-icons/fi";
import { TbCertificate } from "react-icons/tb";
import axios from "axios";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";
// import bcrypt from "bcrypt";
import Logo from "../../assets/image/logo-ussi.png";

const { Header, Content, Sider } = Layout;

const Profile = () => {
  const profile = JSON.parse(localStorage.getItem("persist:auth"));
  const token = JSON.parse(profile.auth);
  console.log(token.accessToken);
  const { id } = jwtDecode(token.accessToken);
  const navigate = useNavigate();

  // Navbar
  const [collapsed, setCollapsed] = useState(false);

  const [users, setUsers] = useState([]);
  const [info, setInfo] = useState({});

  // Integrasi
  useEffect(() => {
    getAdmin(id);
  }, []);

  // Read Data
  const getAdmin = async (id) => {
    await axios
      .get(`http://45.13.132.160:5000/admin/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const getData = res.data.data;
        console.log(getData);
        setUsers(getData);
      })
      .catch((error) => console.log(error));
  };

  // Submit
  const handleSubmit = () => {
    Swal.fire({ title: "Berhasil!", text: "Profil berhasil diperbarui", icon: "success" });
  };

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

  console.log(users);

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

          <Menu mode="inline" theme="dark" defaultSelectedKeys={["profil"]}>
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
              <Menu.Item onClickCapture={handleLogout} key="logout">
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
                  <h2 className="text-slate-800 flex items-center text-lg mb-7">
                    <a href="#">
                      <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-2" />
                    </a>
                    Profil Pengguna
                  </h2>

                  <div className="flex justify-center pb-10">
                    <Image width={150} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="rounded-full" />
                  </div>

                  <Form
                    layout="horizontal"
                    labelCol={{
                      span: 3,
                    }}
                    labelAlign="left"
                  >
                    <Form.Item label="Kode">
                      <Input disabled={true} value={users.id} />
                    </Form.Item>
                    <Form.Item label="Nama">
                      <Input value={users.name} />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input disabled={true} value={users.email} />
                    </Form.Item>
                    {/* <Form.Item label="Password"><Input value={bcrypt(users.password)} /></Form.Item> */}
                    <Form.Item className="flex justify-end">
                      <Button className="mr-3">Reset</Button>
                      <Button type="primary" className="mt-2" onClick={handleSubmit}>
                        Simpan
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Profile;
