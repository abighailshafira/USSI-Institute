import React, { useState, useRef, useEffect } from "react";
import { Space, Table, Button, Input, Popconfirm, Modal } from "antd";
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import axios from "axios";
import InputLembaga from "../Form/InputLembaga";
import EditLembaga from "../Form/EditLembaga";

const TableLembaga = () => {
  const [institutions, setInstitutions] = useState([]);
  const [formData, setFormData] = useState({
    code: "",
    institutionName: "",
    institutionAddress: "",
    province: "",
    email: "",
    phone: "",
    CPName: "",
    CPPhone: "",
    statusSLA: "",
  });
  // Modal
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
    console.log(formData);
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

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

  useEffect(() => {
    getInstitutions();
  }, []);

  const getInstitutions = async () => {
    await axios
      .get("http://localhost:5000/api/v1/institution", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const getData = res.data.data;
        console.log(getData);
        setInstitutions(getData);
      })
      .catch((error) => console.log(error));
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
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  // Table Data
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      code: "10367",
      institutionName: "BMT HASANA MANDIRI",
      institutionAddress: "Jl. Solo-wonogiri ruko grogol green garden telukan, grogol, sukoharjo",
      email: "budiadi1968@gmail.com",
      phone: "089649470248",
      CPName: "IBU UMI",
      CPPhone: "089649470248",
      statusSLA: "1",
    },
    {
      key: "2",
      code: "10313",
      institutionName: "Credit Union - Puskhat",
      institutionAddress: "Jl MT Haryono, Rukan 1-2 Pontianak Selatan, 78121",
      email: "puskhatmail@gmail.com",
      phone: "089649470248",
      CPName: "IBU UMI",
      CPPhone: "089649470248",
      statusSLA: "0",
    },
  ]);

  // Table Columns
  const columns = [
    {
      title: "Kode",
      dataIndex: "code",
      key: "code",
      width: 60,
      fixed: "left",
      sorter: (a, b) => a.code - b.code,
      ...getColumnSearchProps("code"),
    },
    {
      title: "Nama Lembaga",
      dataIndex: "institutionName",
      key: "institutionName",
      width: 120,
      fixed: "left",
      sorter: (a, b) => a.institutionName.localeCompare(b.institutionName),
      ...getColumnSearchProps("institutionName"),
    },
    {
      title: "Alamat Lembaga",
      dataIndex: "institutionAddress",
      key: "institutionAddress",
      width: 150,
      ...getColumnSearchProps("institutionAddress"),
    },
    {
      title: "Provinsi",
      dataIndex: "province",
      key: "province",
      width: 80,
      sorter: (a, b) => a.province.localeCompare(b.province),
      ...getColumnSearchProps("province"),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 100,
      sorter: (a, b) => a.email.localeCompare(b.email),
      ...getColumnSearchProps("email"),
    },
    {
      title: "No Telp",
      dataIndex: "phone",
      key: "phone",
      width: 80,
    },
    {
      title: "Nama CP",
      dataIndex: "CPName",
      key: "CPName",
      width: 80,
      sorter: (a, b) => a.CPName.localeCompare(b.CPName),
      ...getColumnSearchProps("CPName"),
    },
    {
      title: "Kontak CP",
      dataIndex: "CPPhone",
      key: "CPPhone",
      width: 80,
    },
    {
      title: "Status SLA",
      dataIndex: "statusSLA",
      key: "statusSLA",
      width: 60,
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
      onFilter: (value, record) => record.statusSLA.indexOf(value) === 0,
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 80,
      align: "center",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Space size="small">
            <Button icon={<EditOutlined />} onClick={showModal2} />
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
        <Table
          columns={columns}
          dataSource={institutions}
          bordered
          size="middle"
          scroll={{
            x: "calc(1000px + 50%)",
            y: 500,
          }}
        />

        <Modal title="Tambah Lembaga" open={isModalOpen1} width={800} onOk={handleOk1} onCancel={handleCancel1}>
          <InputLembaga formData={formData} setFormData={setFormData} />
        </Modal>

        <Modal title="Edit Lembaga" open={isModalOpen2} width={800} onOk={handleOk2} onCancel={handleCancel2}>
          <EditLembaga />
        </Modal>
      </div>
    </>
  );
};

export default TableLembaga;
