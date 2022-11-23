import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, Layout, Menu, Space, Table } from "antd";
import Search from "antd/lib/transfer/search";
import { FiHome, FiList, FiChevronLeft, FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid, HiOutlineViewGridAdd } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";

const { Header, Content, Sider } = Layout;
const { Option } = Select;

const Lembaga = () => {
  //table
  const columns = [
    {
      title: "Kode",
      dataIndex: "code",
      key: "code",
      width: 50,
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: "Nama Lembaga",
      dataIndex: "institutionName",
      key: "institutionName",
      width: 120,
      sorter: (a, b) => a.institutionName - b.institutionName,
      filters: [
        {
          text: "BPR",
          value: "BPR",
        },
        {
          text: "Perumda",
          value: "Perumda",
        },
      ],
    },
    {
      title: "Alamat Lembaga",
      dataIndex: "institutionAddress",
      key: "institutionAddress",
      width: 100,
    },
    {
      title: "Provinsi",
      dataIndex: "province",
      key: "province",
      width: 100,
      sorter: (a, b) => a.province - b.province,
      filters: [
        {
          text: "Jawa Barat",
          value: "Jawa Barat",
        },
        {
          text: "Jawa Tengah",
          value: "Jawa Tengah",
        },
      ],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 100,
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: "No Telp",
      dataIndex: "phone",
      key: "phone",
      width: 90,
    },
    {
      title: "Nama CP",
      dataIndex: "CPName",
      key: "CPName",
      width: 100,
      sorter: (a, b) => a.CPName - b.CPName,
    },
    {
      title: "Kontak CP",
      dataIndex: "CPPhone",
      key: "CPPhone",
      width: 90,
    },
    {
      title: "Status SLA",
      dataIndex: "statusSLA",
      key: "statusSLA",
      width: 80,
      filters: [
        {
          text: "0",
          value: "0",
        },
        {
          text: "1",
          value: "1",
        },
      ],
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 80,
      render: () => <a>Delete</a>,
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      institutionName: "BPR Kota Bandung",
      code: "00000",
      phone: "081224403699",
    });
  }

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
            defaultSelectedKeys={["lembaga"]}
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
              <Menu.Item key="profil" icon={<FiSettings />}>
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
              <div className="container p-3 mb-1 bg-body rounded d-flex flex-column">
                <div className="bg-white shadow-lg rounded-lg p-10">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h2 className="title font-semibold text-xl text-slate-800">Lembaga</h2>
                    </div>
                    <div>
                      <Button type="primary" icon={<PlusOutlined />} />
                    </div>
                  </div>

                  <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    size="middle"
                    scroll={{
                      x: "calc(700px + 50%)",
                      y: 500,
                    }}
                  />
                </div>

                <div className="dashboard-card mt-10">
                  <h2 className="text-slate-800 flex items-center text-lg mb-7">
                    <a href="#">
                      <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-3" />
                    </a>
                    Tambah Pengguna
                  </h2>
                  <Form
                    labelCol={{
                      span: 4,
                    }}
                    layout="horizontal"
                    labelAlign="left"
                  >
                    <Form.Item
                      name="code"
                      label="Kode Lembaga"
                      rules={[
                        {
                          required: true,
                          message: "Please input your ...",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="institutionName"
                      label="Nama Lembaga"
                      rules={[
                        {
                          required: true,
                          message: "Please input your ...",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="institutionAddress"
                      label="Alamat Lembaga"
                      rules={[
                        {
                          required: true,
                          message: "Please input your ...",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="province"
                      label="Provinsi"
                      rules={[
                        {
                          required: true,
                          message: "Please input your ...",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="phone"
                      label="Phone Number"
                      rules={[
                        {
                          required: true,
                          message: "Please input your phone number!",
                        },
                      ]}
                    >
                      <Input
                        addonBefore="+62"
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="CPName"
                      label="Nama CP"
                      rules={[
                        {
                          required: true,
                          message: "Please input your ...",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="CPPhone"
                      label="Kontak CP"
                      rules={[
                        {
                          required: true,
                          message: "Please input your ...",
                        },
                      ]}
                    >
                      <Input
                        addonBefore="+62"
                        style={{
                          width: "100%",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="statusSLA"
                      label="Status SLA"
                      rules={[
                        {
                          required: true,
                          message: "Please input your ...",
                        },
                      ]}
                    >
                      <Select>
                        <Select.Option value="0">0</Select.Option>
                        <Select.Option value="1">1</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item className="flex justify-end">
                      <Button type="primary" className="mt-2">
                        Tambah
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

export default Lembaga;
