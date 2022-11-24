import React, { useState, useRef } from "react";
import { Table, Typography, Space, Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
const { Text } = Typography;

const TableRekapPelatihan = () => {
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
      key: "1",
      institutionName: "PT. BPR DANA RAYA JAWA TIMUR",
      participant: 1,
    },
    {
      key: "2",
      institutionName: "PT. BPR Artha Bersama",
      participant: 2,
    },
    {
      key: "3",
      institutionName: "PT BPR ANUGERAH HARTA KALIWUNGU",
      participant: 1,
    },
  ]);

  // Table Column
  const columns = [
    {
      title: "Nama BPR",
      dataIndex: "institutionName",
      key: "institutionName",
      width: 200,
      fixed: "left",
      sorter: (a, b) => a.institutionName.localeCompare(b.institutionName),
      ...getColumnSearchProps("institutionName"),
    },
    {
      title: "Pelatihan dan Trial Error Aplikasi Obox 1 (Januari)",
      align: "center",

      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
    {
      title: "Pelatihan Audit TI (Februari)",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.institutionName - b.institutionName,
        },
      ],
    },
    {
      title: "Pelatihan dan Trial Error Aplikasi Obox 2 (Maret)",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
    {
      title: "Teknik audit berbantuan komputer dengan ACL (April)",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
    {
      title: "Pelatihan Penggunaan Aplikasi USSI (Mei)",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
    {
      title: "Pelatihan Fungsi SDM TI (Juni)",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
    {
      title: "Pelatihan Mikrotik (Juli)",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
    {
      title: "Pelatihan dan Petunjuk Teknis Pelaporan dan Solusi Permasalahan LAPBUL (Agustus)",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
    {
      title: "Pelatihan Digitalisasi (September)",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
    {
      title: "Total",
      align: "center",
      children: [
        {
          title: "Jumlah Peserta",
          dataIndex: "participant",
          key: "participant",
          width: 130,
          align: "center",
          sorter: (a, b) => a.participant - b.participant,
        },
      ],
    },
  ];

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        bordered
        size="middle"
        scroll={{
          x: "calc(700px + 50%)",
          y: 500,
        }}
        summary={(pageData) => {
          let totalParticipant = 0;
          pageData.forEach(({ participant }) => {
            totalParticipant += participant;
          });
          return (
            <>
              <Table.Summary.Row align="center">
                <Table.Summary.Cell index={0} align="left">
                  Total
                </Table.Summary.Cell>
                <Table.Summary.Cell index={1}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={2}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={3}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={4}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={5}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={6}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={7}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={8}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell index={9}>
                  <Text>{totalParticipant}</Text>
                </Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </>
  );
};

export default TableRekapPelatihan;
