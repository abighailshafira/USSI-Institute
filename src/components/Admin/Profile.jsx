import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { Form, Input, Layout, Menu, Space, Image, Button } from "antd";
import Search from "antd/lib/transfer/search";
import { FiHome, FiList, FiSettings, FiLogOut, FiUser, FiChevronLeft } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid, HiOutlineViewGridAdd } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";

const { Header, Content, Sider } = Layout;

const Profile = () => {
  return (
    <>
      {" "}
      <Layout>
        <Sider
          width={230}
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
            defaultSelectedKeys={["profile"]}
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
              <Menu.Item key="profile" icon={<FiSettings />}>
                <Link to="/dashboard/profile" />
                Profil
              </Menu.Item>
              <Menu.Item key="logout" icon={<FiLogOut />}>
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
                      <Input disabled={true} />
                    </Form.Item>
                    <Form.Item label="Nama">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input disabled={true} />
                    </Form.Item>
                    <Form.Item label="Password">
                      <Input />
                    </Form.Item>
                    <Form.Item className="flex justify-end">
                      <Button className="mr-3">Reset</Button>
                      <Button type="primary" className="mt-2">
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
