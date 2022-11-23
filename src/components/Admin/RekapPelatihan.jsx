import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { Button, Layout, Menu, Space } from "antd";
import Search from "antd/lib/transfer/search";
import { PlusOutlined } from "@ant-design/icons";
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

const App = () => {
  return (
    <>
      {" "}
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={
            {
              // height: "screen",
            }
          }
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
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
            defaultSelectedKeys={["rekapPelatihan"]}
            // selectedKeys={[location.pathname]}
          >
            <Menu.Item key="dashboard" icon={<FiHome />}>
              <Link to="/dashboard" />
              Dashboard
            </Menu.Item>
            <Menu.SubMenu title="Pelatihan" icon={<HiOutlineViewGrid />}>
              <Menu.Item key="pelatihan" icon={<HiOutlineViewGridAdd />}>
                <Link to="/dashboard/pelatihan" />
                Pelatihan
              </Menu.Item>
              <Menu.Item key="rekapPelatihan" icon={<FiList />}>
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
              <Menu.Item key="one" icon={<FiSettings />}>
                <Link to="/dashboard/profile" />
                Profil
              </Menu.Item>
              <Menu.Item key="two" icon={<FiLogOut />}>
                Keluar
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>

        <Layout>
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
                <Search
                  placeholder="input search text"
                  allowClear
                  enterButton="Search"
                  size="large"
                  // onSearch={onSearch}
                />
                <Menu.Item key="1" icon={<FiHome />}>
                  Hi, Admin
                  <Link to="/dashboard" />
                </Menu.Item>
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
                      <Button type="primary" icon={<PlusOutlined />} />
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
