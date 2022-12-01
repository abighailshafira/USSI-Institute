import React, { useState, useRef, useEffect } from "react";
import { Input, Popconfirm, Table, Space, Button, Modal } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import InputPelatihan from "../Form/InputPelatihan";
import EditPelatihan from "../Form/EditPelatihan";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const TablePelatihan = () => {
  // Integrasi
  const [training, setTraining] = useState([]);
  const [formData, setFormData] = useState({
    trainingName: "",
    description: "",
    startDate: "",
    endDate: "",
    time: "",
    location: "",
    city: "",
    img: "",
    registrationDate: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  // Read
  useEffect(() => {
    detailTraining();
  }, []);

  const detailTraining = async () => {
    await axios
      .get("http://localhost:5000/api/v1/detail/training", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const getData = res.data.data;
        console.log(getData);
        setTraining(getData);
      })
      .catch((error) => console.log(error));
  };

  // Delete
  const deleteTraining = async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/detail/training/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    detailTraining();
    Swal.fire("Berhasil Dihapus!", `Pelatihan ${id} Berhasil hapus`, "success");
  };

  // Modal input pelatihan
  const [confirmLoading1, setConfirmLoading1] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `http://localhost:5000/api/v1/training`,
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        console.log(res);
        navigate("/dashboard/pelatihan");
      })
      .catch((err) => {
        if (err.response) {
          console.log("err.response ", err.response);
        } else if (err.request) {
          console.log("err.request ", err.request);
        } else if (err.message) {
        }
      });

    setConfirmLoading1(true);
    setTimeout(() => {
      setIsModalOpen1(false);
      setConfirmLoading1(false);
    }, 1000);

    Swal.fire({ title: "Berhasil!", text: "Data pelatihan berhasil ditambahkan", icon: "success" });
    // Swal.fire({ title: "Ups!", text: "Silahkan lengkapi data", icon: "error" });
  };

  const handleCancel1 = () => {
    setIsModalOpen1(false);
  };

  // Modal edit pelatihan
  const [confirmLoading2, setConfirmLoading2] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal2 = () => {
    setIsModalOpen2(true);
  };

  const handleOk2 = () => {
    setConfirmLoading2(true);
    setTimeout(() => {
      setIsModalOpen2(false);
      setConfirmLoading2(false);
    }, 1000);

    Swal.fire({ title: "Berhasil!", text: "Data pelatihan berhasil diperbarui", icon: "success" });
    // Swal.fire({ title: "Ups!", text: "Silahkan lengkapi data", icon: "error" });
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
  const [dataSource, setDataSource] = useState([
    {
      trainingName: "Pelatihan",
      description: "aaaaaaaaaaaaaaaaaaaaaaaaaa",
      startDate: "2022-11-25",
      endDate: "2022-11-25",
      time: "01.20",
      location: "Bandung",
      pendaftaran: "2022-11-25",
    },
  ]);

  // Table
  const columns = [
    {
      title: "Nama Pelatihan",
      dataIndex: "trainingName",
      key: "trainingName",
      width: 150,
      editable: true,
      fixed: "left",
      sorter: (a, b) => a.trainingName.localeCompare(b.trainingName),
      ...getColumnSearchProps("trainingName"),
    },
    {
      title: "description",
      dataIndex: "description",
      width: 180,
      editable: true,
      editable: true,
    },
    {
      title: "Tanggal Mulai",
      dataIndex: "startDate",
      key: "startDate",
      width: 80,
      editable: true,
      sorter: (a, b) => a.startDate - b.startDate,
      ...getColumnSearchProps("startDate"),
    },
    {
      title: "Tanggal Selesai",
      dataIndex: "endDate",
      key: "endDate",
      width: 80,
      editable: true,
      sorter: (a, b) => a.endDate - b.endDate,
      ...getColumnSearchProps("endDate"),
    },
    {
      title: "Waktu",
      dataIndex: "time",
      key: "time",
      width: 50,
      editable: true,
      sorter: (a, b) => a.time - b.time,
      ...getColumnSearchProps("time"),
    },
    {
      title: "Lokasi",
      dataIndex: "location",
      key: "location",
      width: 100,
      editable: true,
      sorter: (a, b) => a.location.localeCompare(b.location),
      ...getColumnSearchProps("location"),
    },
    {
      title: "Gambar",
      dataIndex: "image",
      key: "image",
      editable: true,
      width: 100,
    },
    {
      title: "Batas Pendaftaran",
      dataIndex: "pendaftaran",
      key: "pendaftaran",
      editable: true,
      width: 100,
      sorter: (a, b) => a.pendaftaran - b.pendaftaran,
      ...getColumnSearchProps("pendaftaran"),
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      width: 80,
      align: "center",
      render: (_, record) => (
        <Space size="small">
          <Button icon={<EditOutlined />} onClick={showModal2} />
          <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => deleteTraining(record.id)} />
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
              <h2 className="title font-semibold text-xl text-slate-800">Pelatihan</h2>
            </div>
            <div>
              <Button type="primary" icon={<PlusOutlined />} onClick={showModal1} />
            </div>
          </div>
          <Table
            bordered
            dataSource={training}
            columns={columns}
            size="middle"
            scroll={{
              x: "calc(1200px + 50%)",
              y: 500,
            }}
          />

          <Modal title="Tambah Pelatihan" open={isModalOpen1} width={1000} onOk={handleOk1} onCancel={handleCancel1} confirmLoading={confirmLoading1}>
            <InputPelatihan formData={formData} setFormData={setFormData} />
          </Modal>

          <Modal title="Edit Pelatihan" open={isModalOpen2} width={1000} onOk={handleOk2} onCancel={handleCancel2} confirmLoading={confirmLoading2}>
            <EditPelatihan />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default TablePelatihan;
