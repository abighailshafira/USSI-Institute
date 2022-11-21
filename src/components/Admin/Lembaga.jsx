import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";

import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Select, Layout, Menu, Modal, Space, Table } from "antd";
import Search from "antd/lib/transfer/search";

import { FiHome, FiSettings, FiLogOut, FiUser, FiPlus } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGridAdd } from "react-icons/hi";
import { GrCertificate } from "react-icons/gr";

const { Header, Content, Sider } = Layout;

const Lembaga = () => {
  //modal
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  //table
  const columns = [
    {
      title: "Nama Lembaga",
      dataIndex: "institutionName",
      key: "institutionName",
      width: 150,
      fixed: "left",
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
      onFilter: (value, record) => record.institution.indexOf(value) === 0,
    },
    {
      title: "Kode",
      align: "center",
      dataIndex: "code",
      key: "code",
      width: 50,
      align: "center",
    },
    {
      title: "Alamat Lembaga",
      align: "center",
      dataIndex: "institutionAddress",
      key: "institutionAddress",
      width: 100,
      align: "center",
    },
    {
      title: "Provinsi",
      align: "center",
      dataIndex: "province",
      key: "province",
      width: 100,
      align: "center",
    },
    {
      title: "Email",
      align: "center",
      dataIndex: "email",
      key: "email",
      width: 100,
      align: "center",
    },
    {
      title: "No Telp",
      align: "center",
      dataIndex: "phone",
      key: "phone",
      width: 90,
      align: "center",
    },
    {
      title: "Nama CP",
      align: "center",
      dataIndex: "CPName",
      key: "CPName",
      width: 100,
      align: "center",
    },
    {
      title: "Kontak CP",
      align: "center",
      dataIndex: "CPPhone",
      key: "CPPhone",
      width: 90,
      align: "center",
    },
    {
      title: "Status SLA",
      align: "center",
      dataIndex: "statusSLA",
      key: "statusSLA",
      width: 80,
      align: "center",
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
              <div className="container p-3 mb-1 bg-body rounded d-flex flex-column">
                <div className="row">
                  <div className="col text-title text-start">
                    <h1 className="title fw-bold text-3xl mb-2 text-slate-800">Lembaga</h1>
                    <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium magnam quaerat?</p>
                  </div>
                  <div className="bg-white shadow-lg rounded-lg p-10">
                    <div className="col button-add text-end mb-5">
                      <Button type="primary" icon={<PlusOutlined />} onClick={showModal} />
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
                </div>

                <Modal title="Lembaga" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
                  <Form
                    labelCol={{
                      span: 7,
                    }}
                    wrapperCol={{
                      span: 14,
                    }}
                    layout="horizontal"
                  >
                    <Form.Item label="Kode">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Nama Lembaga">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Alamat Lembaga">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Provinsi">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Nomor Telepon">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Nama CP">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Kontak CP">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Status SLA">
                      <Select>
                        <Select.Option value="demo">0</Select.Option>
                        <Select.Option value="demo">1</Select.Option>
                      </Select>
                    </Form.Item>
                  </Form>
                </Modal>
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default Lembaga;
