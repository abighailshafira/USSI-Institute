import React, { useState, useRef } from "react";
import { Table } from "antd";
import { Button, Input, Space } from "antd";
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const App = () => {
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

  // Table columns
  const columns = [
    {
      title: "Kegiatan",
      dataIndex: "trainingName",
      key: "trainingName",
      width: 350,
      sorter: (a, b) => a.trainingName.localeCompare(b.trainingName),
      ...getColumnSearchProps("trainingName"),
    },
    {
      title: "Tanggal Mulai",
      dataIndex: "startDate",
      key: "startDate",
      width: 150,
      sorter: (a, b) => a.startDate - b.startDate,
      ...getColumnSearchProps("startDate"),
    },
    {
      title: "Tanggal Selesai",
      dataIndex: "endDate",
      key: "endDate",
      width: 150,
      sorter: (a, b) => a.endDate - b.endDate,
      ...getColumnSearchProps("endDate"),
    },
    {
      title: "Lokasi",
      dataIndex: "location",
      key: "location",
      width: 200,
      sorter: (a, b) => a.location.localeCompare(b.location),
      ...getColumnSearchProps("location"),
    },
    {
      title: "Kota",
      dataIndex: "city",
      key: "city",
      width: 100,
      sorter: (a, b) => a.city.localeCompare(b.city),
      ...getColumnSearchProps("city"),
    },
    {
      title: "Sertifikat",
      dataIndex: "sertificate",
      align: "center",
      render: (_, record) => (data.length >= 1 ? <Button type="primary" icon={<DownloadOutlined />}></Button> : null),
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "status",
      filters: [
        {
          text: "Download",
          value: "Download",
        },
        {
          text: "Lulus",
          value: "Lulus",
        },
        {
          text: "Tidak Lulus",
          value: "Tidak Lulus",
        },
        {
          text: "Menunggu Hasil",
          value: "Menunggu Hasil",
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
  ];

  // Table data
  const data = [];
  for (let i = 0; i < 15; i++) {
    data.push({
      number: i + 1,
      trainingName: "Pelatihan Sertifikasi Teknisi Muda Jaringan Komputer",
      age: i + 1,
      location: "Hotel Grand Cordella",
      city: "Bandung",
    });
  }

  return (
    <>
      <div className="container mt-36">
        <div className="w-full px-4">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2 text-slate-800">Kegiatan Peserta</h1>
            <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium magnam quaerat?</p>
          </div>
        </div>

        <Table className="px-5" columns={columns} dataSource={data} bordered size="middle" />
      </div>
    </>
  );
};
export default App;
