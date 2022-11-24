import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { Layout, Menu, Space } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { FiHome, FiUser } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import TablePengguna from "./Table/TablePengguna";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  // Navbar
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={230}
          breakpoint="lg"
          collapsedWidth="100"
          style={
            {
              // height: "100%",
              // borderRight: 0,
            }
          }
        >
          <div className="logo">
            <Link to="/dashboard">
              <a className="py-6 flex justify-center">
                <img src={Logo} alt="USSI Institute" className="h-10" />
              </a>
            </Link>
          </div>

          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["dashboard"]}
            // selectedKeys={[location.pathname]}
          >
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
              <Menu.Item key="logout">Keluar</Menu.Item>
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
                <div>
                  <h1 className="text-3xl mb-2 text-slate-800">Dashboard</h1>
                  <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium magnam quaerat?</p>
                </div>

                <TablePengguna />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
