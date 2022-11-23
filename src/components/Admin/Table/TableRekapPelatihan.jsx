import React from "react";
import { Table, Typography } from "antd";
const { Text } = Typography;

const TableRekapPelatihan = () => {
  // Table
  const columns = [
    {
      title: "Nama BPR",
      dataIndex: "institutionName",
      key: "institutionName",
      width: 150,
      fixed: "left",
      sorter: (a, b) => a.institutionName - b.institutionName,
      filters: [
        {
          text: "BPR",
          value: "BPR",
        },
        {
          text: "Perumda",
          value: "Perumda",
        },
      ],
      onFilter: (value, record) => record.institution.indexOf(value) === 0,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
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
          sorter: (a, b) => a.institutionName - b.institutionName,
        },
      ],
    },
  ];

  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      key: i,
      institutionName: "BPR Kota Bandung",
      participant: 1,
    });
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
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
