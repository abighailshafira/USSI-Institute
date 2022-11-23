import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import Search from "antd/lib/transfer/search";
import { Form, Input, Button, Layout, Menu, Space, Table, Upload, DatePicker, TimePicker } from "antd";
import { FiHome, FiList, FiChevronLeft, FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid, HiOutlineViewGridAdd } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";

const { Header, Content, Sider } = Layout;
const { RangePicker } = DatePicker;

const App = () => {
  //table
  const columns = [
    {
      title: "Nama Pelatihan",
      dataIndex: "trainingName",
      key: "trainingName",
      width: 150,
    },
    {
      title: "Deskripsi",
      dataIndex: "description",
      key: "description",
      width: 150,
    },
    {
      title: "Tanggal Mulai",
      dataIndex: "startDate",
      key: "startDate",
      width: 100,
    },
    {
      title: "Tanggal Selesai",
      dataIndex: "endDate",
      key: "endDate",
      width: 100,
    },
    {
      title: "Waktu",
      dataIndex: "time",
      key: "time",
      width: 50,
    },
    {
      title: "Lokasi",
      dataIndex: "location",
      key: "location",
      width: 100,
    },
    {
      title: "Gambar",
      dataIndex: "image",
      key: "image",
      width: 100,
    },
    {
      title: "Batas Pendaftaran",
      dataIndex: "pendaftaran",
      key: "pendaftaran",
      width: 100,
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
    });
  }

  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

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
            defaultSelectedKeys={["pelatihan"]}
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
                {/* <div className="bg-white shadow-lg rounded-lg p-10">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h1 className="title font-semibold text-3xl text-slate-800">Rekap Pelatihan</h1>
                    </div>
                    <div>
                      <Button type="primary" icon={<PlusOutlined />} onClick={showModal} />
                    </div>
                  </div>

                  
                </div> */}

                <div className="dashboard-card">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h2 className="title font-semibold text-xl text-slate-800">Pelatihan</h2>
                    </div>
                    <div>
                      <Button type="primary" icon={<PlusOutlined />} />
                    </div>
                  </div>
                  <Table
                    pagination={false}
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
                  <h2 className="text-slate-800 flex items-center text-lg">
                    <a href="#">
                      <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-2" />
                    </a>
                    Tambah Pelatihan
                  </h2>
                  <Form
                    labelCol={{
                      span: 7,
                    }}
                    wrapperCol={{
                      span: 14,
                    }}
                    layout="horizontal"
                  >
                    <Form.Item label="Nama Pelatihan">
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name="deskripsi"
                      label="Deskripsi"
                      rules={[
                        {
                          required: true,
                          message: "Please input Intro",
                        },
                      ]}
                    >
                      <Input.TextArea showCount maxLength={100} />
                    </Form.Item>
                    <Form.Item name="range-picker" label="Tanggal pelaksanaan" {...rangeConfig}>
                      <RangePicker />
                    </Form.Item>
                    <Form.Item name="time-picker" label="Waktu Pelaksanaan" {...config}>
                      <TimePicker />
                    </Form.Item>
                    <Form.Item label="Lokasi">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Gambar" valuePropName="fileList">
                      <Upload action="/upload.do" listType="picture-card">
                        <div>
                          <PlusOutlined />
                          <div
                            style={{
                              marginTop: 8,
                            }}
                          >
                            Upload
                          </div>
                        </div>
                      </Upload>
                    </Form.Item>
                    <Form.Item label="Batas Pendaftaran">
                      <DatePicker />
                    </Form.Item>
                    <Form.Item>
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

    // <>
    //   <div className="container mt-36">
    //     <div className="w-full px-4">
    //       <div className="mb-10">
    //         <h1 className="text-3xl font-bold mb-2 text-slate-800">Pelatihan</h1>
    //         <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium magnam quaerat?</p>
    //       </div>
    //     </div>

    //     <Table
    //       className="px-5"
    //       pagination={false}
    //       columns={columns}
    //       dataSource={data}
    //       bordered
    //       size="middle"
    //       scroll={{
    //         x: "calc(700px + 50%)",
    //         y: 500,
    //       }}
    //     />
    //   </div>
    // </>
  );
};
export default App;
