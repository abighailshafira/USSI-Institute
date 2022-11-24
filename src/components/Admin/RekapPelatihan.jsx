import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { Layout, Menu, Space, DatePicker, Input, Button } from "antd";
import Search from "antd/lib/transfer/search";
import { PlusOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import { FiHome, FiList, FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid, HiOutlineViewGridAdd } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import TableRekapPelatihan from "./Table/TableRekapPelatihan";

const { Header, Content, Sider } = Layout;

//contoh data tabel dan response BE
// const dataPelatihan = [
//   {
//     id: 1,
//     institutionName: "Universitas Brawijaya",
//     detailTrainings: [
//       {
//         id: 1,
//         trainingName: "Pelatihan Janauari",
//         startDate: "Januari", // mengambil dari startdate lalu di convert ke bulan
//         detail: {
//           participants: 100, // jumlah peserta dari trainingname dan institutionName yang sama
//           attendance: null, // jumlah peserta yang hadir dari trainingname dan institutionName yang sama
//         },
//       },
//       {
//         id: 2,
//         trainingName: "Pelatihan Janauari",
//         startDate: "Januari", // mengambil dari startdate lalu di convert ke bulan
//         detail: {
//           participants: 100, // jumlah peserta dari trainingname dan institutionName yang sama
//           attendance: null, // jumlah peserta yang hadir dari trainingname dan institutionName yang sama
//         },
//       },
//     ],
//   },
// ];
const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      {" "}
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
            defaultSelectedKeys={["dashboard/rekap-pelatihan"]}
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
                <div className="dashboard-card">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h2 className="title font-semibold text-xl text-slate-800">Rekap Pelatihan</h2>
                    </div>
                    <div>
                      <DatePicker onChange={onChange} picker="year" />
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
