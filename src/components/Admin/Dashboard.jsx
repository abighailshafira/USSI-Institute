import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { Layout, Menu, Space, Form, Input, Button, Modal } from "antd";
import Search from "antd/lib/transfer/search";
import { PlusOutlined } from "@ant-design/icons";
import { FiHome, FiList, FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid, HiOutlineViewGridAdd } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import TablePengguna from "./Table/TablePengguna";
import InputPengguna from "./Form/InputPengguna";
import EditPengguna from "./Form/EditPengguna";

const { Header, Content, Sider } = Layout;

const Dashboard = () => {
  // Navbar
  // const [collapsed, setCollapsed] = useState(false);

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
            defaultSelectedKeys={["dashboard"]}
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
              <Menu.Item key="rekap pelatihan" icon={<FiList />}>
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
                <div>
                  <h1 className="text-3xl mb-2 text-slate-800">Dashboard</h1>
                  <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium magnam quaerat?</p>
                </div>

                <div className="dashboard-card mt-10">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h2 className="title font-semibold text-xl text-slate-800">Pengguna</h2>
                    </div>
                    <div>
                      <Button type="primary" icon={<PlusOutlined />} onClick={showModal} />
                    </div>
                  </div>
                  <TablePengguna />
                </div>

                <Modal title="Info Pengguna" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                  <Form
                    labelCol={{
                      span: 3,
                    }}
                    wrapperCol={{
                      span: 14,
                    }}
                    layout="horizontal"
                    labelAlign="left"
                  >
                    <Form.Item label="Kode">
                      <Input disabled={true} />
                    </Form.Item>
                    <Form.Item name="name" label="Nama">
                      <Input disabled={true} />
                    </Form.Item>
                    <Form.Item name="email" label="E-mail">
                      <Input disabled={true} />
                    </Form.Item>
                  </Form>
                </Modal>

                <InputPengguna />
                <EditPengguna />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;
