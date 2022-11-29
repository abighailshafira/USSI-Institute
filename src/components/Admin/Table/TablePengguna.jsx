import React, { useRef, useState, useEffect } from "react";
import { Space, Table, Button, Modal, Input, Popconfirm } from "antd";
import { InfoOutlined, DeleteOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import InputPengguna from "../Form/InputPengguna";
import InfoPengguna from "../Form/InfoPengguna";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TablePengguna = () => {
  // Integrasi
  const [user, setUser] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getAdmin();
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
        setUser(getData);
      })
      .catch((error) => console.log(error));
  };

  const [confirmLoading, setConfirmLoading] = useState(false);

  // Modal input pengguna
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = (e) => {
    e.preventDefault();
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
        console.log(res);
        // navigate("/dashboard");
      })
      .catch((err) => {
        if (err.response) {
          console.log("err.response ", err.response);
        } else if (err.request) {
          console.log("err.request ", err.request);
        } else if (err.message) {
        }
      });

    setConfirmLoading(true);
    setTimeout(() => {
      setIsModalOpen1(false);
      setConfirmLoading(false);
    }, 1000);

    Swal.fire({ title: "Berhasil!", text: "Akun pengguna berhasil ditambahkan", icon: "success" });

    // Swal.fire({ title: "Ups!", text: "Silahkan lengkapi data", icon: "error" });
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  // Modal info pengguna
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
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

  // Delete
  const handleDelete = (key) => {
    // Swal.fire({
    //   title: "Apakah anda yakin?",
    //   text: "Data akan dihapus",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Ya, hapus!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Berhasil!", "Akun pengguna berhasi dihapus", "success");
    //   }
    // });

    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  // Table Data
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Abighail Shafira Ihsani",
      code: "ADMIN-001",
      email: "abighail@gmail.com",
    },
    {
      key: "2",
      name: "Alya Chairunnisa Faz",
      code: "ADMIN-002",
      email: "alya@gmail.com",
    },
  ]);

  // Table Column
  const columns = [
    {
      title: "Kode",
      dataIndex: "code",
      key: "code",
      width: 150,
      ...getColumnSearchProps("code"),
      sorter: (a, b) => a.code.localeCompare(b.code),
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
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Space size="middle">
            <Button type="primary" icon={<InfoOutlined />} onClick={showModal2} />
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <Button type="primary" danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        ) : null,
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
        <Table bordered dataSource={user} columns={columns} size="middle" />
      </div>

      <Modal title="Tambah Pengguna" open={isModalOpen1} width={800} onOk={handleOk1} onCancel={handleCancel1} confirmLoading={confirmLoading}>
        <InputPengguna formData={formData} setFormData={setFormData} />
      </Modal>
      <Modal title="Info Pengguna" open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
        <InfoPengguna />
      </Modal>
    </>
  );
};

export default TablePengguna;
