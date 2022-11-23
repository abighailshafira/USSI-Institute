import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/logo-ussi.png";
import "antd/dist/antd.css";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Layout, Menu, Modal, Space, Table } from "antd";
import Search from "antd/lib/transfer/search";
import { FiHome, FiSettings, FiLogOut, FiUser, FiChevronLeft } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGridAdd } from "react-icons/hi";
import { GrCertificate } from "react-icons/gr";

const { Header, Content, Sider } = Layout;

const Peserta = () => {
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
      title: "Kode",
      align: "center",
      dataIndex: "code",
      key: "code",
      width: 50,
      align: "center",
    },
    {
      title: "Email",
      align: "center",
      dataIndex: "institutionAddress",
      key: "institutionAddress",
      width: 100,
      align: "center",
    },
    {
      title: "Actions",
      align: "center",
      dataIndex: "statusSLA",
      key: "statusSLA",
      width: 80,
      align: "center",
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
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
                <div className="bg-white shadow-lg rounded-lg p-10">
                  <div className="flex justify-between mb-3">
                    <div>
                      <h1 className="title font-semibold text-3xl text-slate-800">Pengguna</h1>
                    </div>
                    <div>
                      <Button type="primary" icon={<PlusOutlined />} onClick={showModal} />
                    </div>
                  </div>

                  <Table pagination={false} columns={columns} dataSource={data} bordered size="middle" />
                </div>

                <div className="bg-white shadow-lg rounded-lg p-10 mt-10">
                  <h2 className="text-slate-800 flex items-center text-lg">
                    <a href="#">
                      <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-2" />
                    </a>
                    Tambah Pengguna
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
                    <Form.Item label="Kode">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Password">
                      <Input />
                    </Form.Item>
                  </Form>
                </div>

                <div className="bg-white shadow-lg rounded-lg p-10 mt-10">
                  <h2 className="text-slate-800 flex items-center text-lg">
                    <a href="#">
                      <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-2" />
                    </a>
                    Edit Pengguna
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
                    <Form.Item label="Kode">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Email">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Password">
                      <Input />
                    </Form.Item>
                  </Form>
                </div>

                <Modal title="Detail Pengguna" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
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
                    <Form.Item label="Email">
                      <Input />
                    </Form.Item>
                    <Form.Item label="Password">
                      <Input />
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

export default Peserta;
