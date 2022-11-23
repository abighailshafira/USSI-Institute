import React, { useState } from "react";
import "antd/dist/antd.css";
import Logo from "../../assets/image/logo-ussi.png";
import { PlusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Layout, Menu, Modal, Space, Table } from "antd";
import { FiHome, FiList, FiChevronLeft, FiSettings, FiLogOut, FiUser } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineViewGrid, HiOutlineViewGridAdd } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";
import Search from "antd/lib/transfer/search";
import { Link } from "react-router-dom";
// import Url from "../../Config";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import AnswerTable from "../../components/admin/AnswerTable";

const { Header, Content, Sider } = Layout;
// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, BarChartOutlined, CloudOutlined, AppstoreOutlined, TeamOutlined, ShopOutlined].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

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
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 100,
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <a>Info</a>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      code: i + 1,
      email: "ussiinstitute.pps@gmail.com",
    });
  }

  //navbar
  const [collapsed, setCollapsed] = useState(false);
  // const [answers, setAnswers] = useState([]);
  // const [answer_name, setAnswer_name] = useState([]);
  // const [mdUser, setMDUser] = useState([]);
  // const auth = useSelector((state) => state.auth);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const [visible, setVisible] = useState(false);
  // const [confirmLoading, setConfirmLoading] = useState(false);

  // const showModal = () => {
  //   setVisible(true);
  // }

  // const handleCancel = () => {
  //   setVisible(false);
  // };

  // const deleteAnswers = async (id) => {
  //   await axios.delete(`${Url}/answers/${id}`, {
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${auth.accessToken}`,
  //     },
  //   });
  //   getAnswer();
  //   Swal.fire("Berhasil Dihapus!", `G - ${id} Berhasil hapus`, "success");
  // };

  // useEffect(() => {
  //   getAnswer();
  // }, []);

  // const getAnswer = async () => {
  //   await axios
  //     .get(`${Url}/answers`, {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${auth.accessToken}`,
  //       },
  //     })
  //     .then((res) => {
  //       setAnswers(res.data);
  //       console.log(res.data);
  //     });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setConfirmLoading(true);
  //   setTimeout(() => {
  //     setVisible(false);
  //     setConfirmLoading(false);
  //     // message.success('This is a success message');
  //   }, 2000);
  //   message.loading("Added question in progress..", 2.5).then(() => {
  //     message.success("Successfully Added", 2.5);
  //     getAnswer();
  //   });
  //   const userData = new URLSearchParams();
  //   userData.append("answer_name", answer_name);
  //   userData.append("md_user", mdUser);
  //   axios({
  //     method: "post",
  //     url: `${Url}/answers`,
  //     data: userData,
  //     headers: {
  //       Accept: "application/json",
  //       Authorization: `Bearer ${auth.accessToken}`,
  //     },
  //   })
  //     .then(() => {
  //       navigate("/admin/answer");
  //     })
  //     .catch((err) => {
  //       message.error("Failed Added", 2);
  //       message.error("Please check your input", 2.5);
  //     });
  // };

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

                  <Table columns={columns} dataSource={data} bordered />
                </div>

                <div className="dashboard-card mt-10">
                  <h2 className="text-slate-800 flex items-center text-lg mb-5">
                    <a href="#">
                      <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-3" />
                    </a>
                    Tambah Pengguna
                  </h2>
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
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" className="mt-2">
                        Tambah
                      </Button>
                    </Form.Item>
                  </Form>
                </div>

                <div className="dashboard-card mt-10">
                  <h2 className="text-slate-800 flex items-center text-lg mb-5">
                    <a href="#">
                      <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-3" />
                    </a>
                    Edit Pengguna
                  </h2>
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
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" className="mt-2">
                        Simpan
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
                <Modal title="Info Pengguna" open={isModalOpen} onOk={handleOk}>
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
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
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

export default Dashboard;
