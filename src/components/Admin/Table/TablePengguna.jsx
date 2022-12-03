import React, { useRef, useState, useEffect } from "react";
import { Space, Table, Button, Modal, Input } from "antd";
import { InfoOutlined, DeleteOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import InputPengguna from "../Form/InputPengguna";
import InfoPengguna from "../Form/InfoPengguna";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TablePengguna = () => {
  // Integrasi
  const [users, setUsers] = useState([]);
  const [detail, setDetail] = useState({});
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    role: "admin",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  // Read
  useEffect(() => {
    getAdmin();
    // getAdminById();
  }, []);

  const getAdmin = async () => {
    await axios
      .get("http://localhost:5000/api/v1/admin", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const getData = res.data.data;
        console.log(getData);
        setUsers(getData);
      })
      .catch((error) => console.log(error));
  };

  const getAdminById = async (id) => {
    await axios
      .get(`http://localhost:5000/api/v1/admin/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const getData = res.data.data;
        // console.log(getData);
        setDetail(getData);
      })
      .catch((error) => console.log(error));
  };

  // Delete
  const deleteAdmin = async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/admin/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    getAdmin();
    Swal.fire("Berhasil Dihapus!", `Admin ${id} Berhasil hapus`, "success");
  };

  // Modal input pengguna
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = (e) => {
    e.preventDefault();
    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen1(false);
      setConfirmLoading(false);
    }, 2000);
    // Swal.fire({ title: "Berhasil!", text: "Akun pengguna berhasil ditambahkan", icon: "success" });

    axios({
      method: "post",
      url: `http://localhost:5000/api/v1/register`,
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        var toastMixin = Swal.mixin({
          icon: "success",
          title: "Title",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        toastMixin.fire({
          title: res.data.message,
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        var toastMixin = Swal.mixin({
          icon: "success",
          title: "Title",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        toastMixin.fire({
          icon: "error",
          animation: true,
          title: "Register Gagal",
        });
      });

    // Swal.fire({ title: "Ups!", text: "Silahkan lengkapi data", icon: "error" });
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  // Modal info pengguna
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = async (id) => {
    setIsModalOpen2(true);
    console.log(id);
    getAdminById(id);

    // await axios
    //   .get(`http://localhost:5000/api/v1/admin/${id}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((res) => {
    //     const getData = res.data.data;
    //     // console.log(getData);

    //     setDetail(getData);
    //   })
    //   .catch((error) => console.log(error));
  };

  // console.log(detail);

  const handleOk2 = (id) => {
    setIsModalOpen2(false);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
  };

  // Search
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder="Search"
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            size="middle"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="middle"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: "#ffc069",
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  // Table Data
  const [dataSource, setDataSource] = useState([]);

  // Table Column
  const columns = [
    {
      title: "Kode",
      dataIndex: "id",
      key: "id",
      width: 150,
      ...getColumnSearchProps("id"),
      sorter: (a, b) => a.id.localeCompare(b.id),
    },
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
      width: 300,
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps("name"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 500,
      sorter: (a, b) => a.email.localeCompare(b.email),
      ...getColumnSearchProps("email"),
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" icon={<InfoOutlined />} onClick={() => showModal2(record.id)} />
          <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => deleteAdmin(record.id)} />
          {/* {console.log(record.id)} */}
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="dashboard-card mt-10">
        <div className="flex justify-between mb-3">
          <div>
            <h2 className="title font-semibold text-xl text-slate-800">Pengguna</h2>
          </div>
          <div>
            <Button type="primary" icon={<PlusOutlined />} onClick={showModal1} />
          </div>
        </div>
        <Table bordered dataSource={users} columns={columns} deleteAdmin={deleteAdmin} size="middle" />
      </div>

      <Modal title="Tambah Pengguna" open={isModalOpen1} width={700} onOk={handleOk1} onCancel={handleCancel1} confirmLoading={confirmLoading}>
        <InputPengguna formData={formData} setFormData={setFormData} />
      </Modal>
      <Modal title="Info Pengguna" open={isModalOpen2} onOk={() => handleOk2(users.id)} onCancel={handleCancel2}>
        <InfoPengguna detail={detail} setDetail={setDetail} />
      </Modal>
    </>
  );
};

export default TablePengguna;
