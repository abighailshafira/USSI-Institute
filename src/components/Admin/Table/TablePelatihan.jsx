import React, { useState, useRef } from "react";
import { Input, Popconfirm, Table, Space, Button, Modal } from "antd";
import { SearchOutlined, PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
import InputPelatihan from "../Form/InputPelatihan";
import EditPelatihan from "../Form/EditPelatihan";

const TablePelatihan = () => {
  // Modal
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const showModal1 = () => {
    setIsModalOpen1(true);
  };

  const handleOk1 = () => {
    setIsModalOpen1(false);
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
      width: 80,
      sorter: (a, b) => a.pendaftaran - b.pendaftaran,
      ...getColumnSearchProps("pendaftaran"),
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
            dataSource={dataSource}
            columns={columns}
            size="middle"
            scroll={{
              x: "calc(1200px + 50%)",
              y: 500,
            }}
          />

          <Modal title="Tambah Pelatihan" open={isModalOpen1} width={1000} onOk={handleOk1} onCancel={handleCancel1}>
            <InputPelatihan />
          </Modal>

          <Modal title="Edit Pelatihan" open={isModalOpen2} width={1000} onOk={handleOk2} onCancel={handleCancel2}>
            <EditPelatihan />
          </Modal>
        </div>
      </div>
    </>
  );
};

export default TablePelatihan;
