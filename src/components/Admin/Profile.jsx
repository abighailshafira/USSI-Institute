import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { Form, Input, Layout, Menu, Space, Image } from "antd";
import Search from "antd/lib/transfer/search";
import { FiHome, FiSettings, FiLogOut, FiUser, FiChevronLeft } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGridAdd } from "react-icons/hi";
import { GrCertificate } from "react-icons/gr";

const { Header, Content, Sider } = Layout;

const Profile = () => {
  return (
    <>
      {" "}
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          style={{
            height: "screen",
            // position: 'fixed',
          }}
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
            defaultSelectedKeys={["3"]}
            // selectedKeys={[location.pathname]}
          >
            <Menu.Item key="1" icon={<FiHome />}>
              <Link to="/dashboard" />
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<HiOutlineViewGridAdd />}>
              <Link to="/dashboard/pelatihan" />
              Pelatihan
            </Menu.Item>
            <Menu.Item key="3" icon={<HiOutlineOfficeBuilding />}>
              <Link to="/dashboard/lembaga" />
              Lembaga
            </Menu.Item>
            <Menu.Item key="4" icon={<GrCertificate />}>
              <Link to="/dashboard" />
              Peserta
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" title="User" icon={<FiUser />}>
              <Menu.Item key="one" icon={<FiSettings />}>
                Profile
              </Menu.Item>
              <Menu.Item key="two" icon={<FiLogOut />}>
                Logout
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>

        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
            }}
          >
            <Menu mode="horizontal">
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
                  <h2 className="text-slate-800 flex items-center text-lg">
                    <a href="#">
                      <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-2" />
                    </a>
                    Profil Pengguna
                  </h2>
                  <div className="flex justify-center pb-10">
                    <Image width={150} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" className="rounded-full" />
                  </div>
                  <Form
                    labelCol={{
                      span: 7,
                    }}
                    wrapperCol={{
                      span: 14,
                    }}
                    layout="vertical"
                  >
                    <Form.Item label="Email">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Password">
                      <Input />
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
