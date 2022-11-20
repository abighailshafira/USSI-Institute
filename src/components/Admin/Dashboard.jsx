import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import Logo from "../../assets/image/logo-ussi.png";
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  DatabaseOutlined,
  FileOutlined,
  LogoutOutlined,
  MailOutlined,
  PieChartOutlined,
  PlusOutlined,
  SettingOutlined,
  ShopOutlined,
  SnippetsOutlined,
  TeamOutlined,
  UploadOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { FiHome } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Button, Input, Layout, Menu, message, Modal, notification, Space } from "antd";
import Search from "antd/lib/transfer/search";
import { Link, useNavigate } from "react-router-dom";
// import Url from "../../Config";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import Swal from "sweetalert2";
// import AnswerTable from "../../components/admin/AnswerTable";

const { Header, Content, Sider } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, BarChartOutlined, CloudOutlined, AppstoreOutlined, TeamOutlined, ShopOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const Dashboard = () => {
  // const [collapsed, setCollapsed] = useState(false);
  // const [answers, setAnswers] = useState([]);
  // const [answer_name, setAnswer_name] = useState([]);
  // const [mdUser, setMDUser] = useState([]);
  // const auth = useSelector((state) => state.auth);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

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
              <a className="py-4 flex justify-center">
                <img src={Logo} alt="USSI Institute" className="h-10" />
              </a>
            </Link>
          </div>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["5"]}
            // selectedKeys={[location.pathname]}
          >
            <Menu.Item key="1" icon={<FiHome />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />}>
              <Link to="/dashboard" />
              Pelatihan
            </Menu.Item>
            <Menu.Item key="4" icon={<UsergroupAddOutlined />}>
              <Link to="/dashboard" />
              Lembaga
            </Menu.Item>
            <Menu.Item key="3" icon={<HiOutlineUserGroup />}>
              <Link to="/dashboard" />
              Peserta
            </Menu.Item>
            <Menu.SubMenu key="SubMenu" title="User" icon={<UserOutlined />}>
              <Menu.Item key="two" icon={<SettingOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="three" icon={<LogoutOutlined />}>
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
            <Menu
              mode="horizontal"
              // defaultSelectedKeys={['mail']}
            >
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
              margin: "5px 16px 0",
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 20,
                minHeight: 650,
              }}
            >
              <div className="container p-3 mb-1 bg-body rounded d-flex flex-column">
                <div className="row">
                  <div className="col text-title text-start">
                    <h4 className="title fw-bold">Dashboard</h4>
                  </div>
                  <div className="col button-add text-end me-3">
                    {/* <Button type="primary" icon={<PlusOutlined />} onClick={showModal} /> */}
                    <Button type="primary" icon={<PlusOutlined />} />
                  </div>
                  {/* <AnswerTable data={answers} deleteAnswers={deleteAnswers} /> */}
                </div>
                {/* <Modal title="Tambah Jawaban" centered visible={visible} onOk={handleSubmit} confirmLoading={confirmLoading} onCancel={handleCancel}> */}
                <Modal title="Tambah Jawaban" centered visible={visible} confirmLoading={confirmLoading}>
                  <div className="text-title text-start">
                    <div className="row">
                      <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
                        Dashboard
                      </label>
                      <div className="col-sm-9">
                        {/* <Input placeholder="Type Answer" onChange={(e) => setAnswer_name(e.target.value)} /> */}
                        <Input placeholder="Type Answer" />
                      </div>
                    </div>
                    <div className="row">
                      <label htmlFor="inputNama3" className="col-sm-3 col-form-label">
                        MD User
                      </label>
                      <div className="col-sm-9">
                        {/* <Input placeholder="Type Value" onChange={(e) => setMDUser(e.target.value)} /> */}
                        <Input placeholder="Type Value" />
                      </div>
                    </div>
                  </div>
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
