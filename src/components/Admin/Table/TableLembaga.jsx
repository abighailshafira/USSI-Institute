import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Space, Table, Button, Input, Modal } from "antd";
import { EditOutlined, DeleteOutlined, SearchOutlined, PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
import Highlighter from "react-highlight-words";
import InputLembaga from "../Form/InputLembaga";
import EditLembaga from "../Form/EditLembaga";

const TableLembaga = () => {
  const [institutions, setInstitutions] = useState([]);
  const [detail, setDetail] = useState({});
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
  const navigate = useNavigate();
  const { id } = useParams();

  // Integrasi
  useEffect(() => {
    getInstitutions();
    // getInstitutionsById();
  }, []);

  // Read Data Lembaga
  const getInstitutions = async () => {
    await axios
      .get("http://45.13.132.160:5000/institution", {
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

  // Delete Data
  const deleteInstitution = async (id) => {
    await axios.delete(`http://45.13.132.160:5000/institution/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    getInstitutions();
    Swal.fire("Berhasil Dihapus!", `Lembaga ${id} Berhasil hapus`, "success");
  };

  //Modal Input Lembaga
  const [confirmLoading1, setConfirmLoading1] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);

  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = (e) => {
    e.preventDefault();
    setConfirmLoading1(true);
    setTimeout(() => {
      setIsModalOpen1(false);
      setConfirmLoading1(false);
    }, 2000);
    Swal.fire({ title: "Berhasil!", text: "Data lembaga berhasil ditambahkan", icon: "success" });

    axios({
      method: "post",
      url: `http://45.13.132.160:5000/institution`,
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        navigate("/dashboard/lembaga");
      })
      .catch((err) => {
        if (err.response) {
          console.log("err.response ", err.response);
        } else if (err.request) {
          console.log("err.request ", err.request);
        } else if (err.message) {
        }
      });
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  // Read Data Lembaga by Id
  const getInstitutionsById = async (id) => {
    await axios
      .get(`http://45.13.132.160:5000/institution/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const getData = res.data.data;
        setDetail(getData);
      })
      .catch((error) => console.log(error));
  };

  const [confirmLoading2, setConfirmLoading2] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = async (id) => {
    setIsModalOpen2(true);
    console.log(id);
    await getInstitutionsById(id);
  };

  const handleOk2 = (e) => {
    e.preventDefault();
    setConfirmLoading2(true);
    setTimeout(() => {
      setIsModalOpen2(false);
      setConfirmLoading2(false);
    }, 1000);

    axios({
      method: "put",
      url: `http://45.13.132.160:5000/institution`,
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        navigate("/dashboard/lembaga");
      })
      .catch((err) => {
        if (err.response) {
          console.log("err.response ", err.response);
        } else if (err.request) {
          console.log("err.request ", err.request);
        } else if (err.message) {
        }
      });

    Swal.fire({ title: "Berhasil!", text: "Data lembaga berhasil diperbarui", icon: "success" });
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

  // Table Columns
  const columns = [
    {
      title: "Kode",
      dataIndex: "code",
      key: "code",
      width: 60,
      sorter: (a, b) => a.code - b.code,
      ...getColumnSearchProps("code"),
    },
    {
      title: "Nama Lembaga",
      dataIndex: "institutionName",
      key: "institutionName",
      width: 120,
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
      render: (_, record) => (
        <Space size="small">
          <Button icon={<EditOutlined />} onClick={() => showModal2(record.id)} />
          <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => deleteInstitution(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="container p-3">
        <div className="dashboard-card">
          <div className="flex justify-between mb-3">
            <div>
              <h2 className="title font-semibold text-xl text-slate-800">Lembaga</h2>
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

          <Modal title="Tambah Lembaga" open={isModalOpen1} width={800} onOk={handleOk1} onCancel={handleCancel1} confirmLoading={confirmLoading1}>
            <InputLembaga formData={formData} setFormData={setFormData} />
          </Modal>

          <Modal title="Edit Lembaga" open={isModalOpen2} width={800} onOk={handleOk2} onCancel={handleCancel2} confirmLoading={confirmLoading2}>
            <EditLembaga detail={detail} formData={formData} setFormData={setFormData} />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default TableLembaga;
