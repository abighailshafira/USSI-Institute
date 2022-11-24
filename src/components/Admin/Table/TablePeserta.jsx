import React, { useRef, useState } from "react";
import { Space, Table, Button, Input, Tag, Upload } from "antd";
import { UploadOutlined, SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

const TablePeserta = () => {
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

  // Table
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      no: "1",
      name: "Edward King 0",
      institutionName: "BPR Tangerang",
      trainingName: "Pelatihan A",
      startDate: "12/02/2022",
      endDate: "12/03/2022",
      status: ["Download"],
    },
    {
      key: "2",
      no: "2",
      name: "Zayn King 1",
      institutionName: "BPR Bandung",
      trainingName: "Pelatihan",
      startDate: "12/02/2022",
      endDate: "12/03/2022",
      status: ["Lulus"],
    },
    {
      key: "3",
      no: "3",
      name: "Zayn King 1",
      institutionName: "BPR Bandung",
      trainingName: "Pelatihan",
      startDate: "12/02/2022",
      endDate: "12/03/2022",
      status: ["Tidak Lulus"],
    },
    {
      key: "4",
      no: "4",
      name: "Zayn King 1",
      institutionName: "BPR Bandung",
      trainingName: "Pelatihan",
      startDate: "12/02/2022",
      endDate: "12/03/2022",
      status: ["Menunggu Hasil"],
    },
  ]);

  const defaultColumns = [
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
      width: 150,
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps("name"),
    },
    {
      title: "Lembaga",
      dataIndex: "institutionName",
      key: "institutionName",
      width: 200,
      sorter: (a, b) => a.institutionName.localeCompare(b.institutionName),
      ...getColumnSearchProps("institutionName"),
    },
    {
      title: "Kegiatan",
      dataIndex: "trainingName",
      key: "trainingName",
      width: 300,
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
      width: 150,
      sorter: (a, b) => a.location.localeCompare(b.location),
      ...getColumnSearchProps("location"),
    },
    {
      title: "Kota",
      dataIndex: "city",
      key: "city",
      width: 150,
      sorter: (a, b) => a.city.localeCompare(b.city),
      ...getColumnSearchProps("city"),
    },
    {
      title: "Sertifikat",
      dataIndex: "sertificate",
      align: "center",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Upload {...props} fileList={fileList}>
            <Button type="primary" icon={<UploadOutlined />}></Button>
          </Upload>
        ) : null,
    },
    {
      title: "Status",
      key: "Status",
      dataIndex: "status",
      render: (_, { status }) => (
        <>
          {status.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "Download") {
              color = "geekblue";
            } else if (tag === "Tidak Lulus") {
              color = "red";
            } else if (tag === "Lulus") {
              color = "green";
            } else if (tag === "Menunggu Hasil") {
              color = "yellow";
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),

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

  // Upload
  const [fileList, setFileList] = useState([]);
  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange: handleChange,
    multiple: true,
  };

  return (
    <>
      <div>
        <Table bordered dataSource={dataSource} columns={defaultColumns} size="middle" />
      </div>
    </>
  );
};

export default TablePeserta;
