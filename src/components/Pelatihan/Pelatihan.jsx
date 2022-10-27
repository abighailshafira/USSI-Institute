import { Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Nama BPR",
    dataIndex: "institution",
    key: "institution",
    width: 150,
    fixed: "left",
    align: "center",
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
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
  {
    title: "Pelatihan Audit TI (Februari)",
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
  {
    title: "Pelatihan dan Trial Error Aplikasi Obox 2 (Maret)",
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
  {
    title: "Teknik audit berbantuan komputer dengan ACL (April)",
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
  {
    title: "Pelatihan Penggunaan Aplikasi USSI (Mei)",
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
  {
    title: "Pelatihan Fungsi SDM TI (Juni)",
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
  {
    title: "Pelatihan Mikrotik (Juli)",
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
  {
    title: "Pelatihan dan Petunjuk Teknis Pelaporan dan Solusi Permasalahan LAPBUL (Agustus)",
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
  {
    title: "Pelatihan Digitalisasi (September)",
    children: [
      {
        title: "Jumlah Peserta",
        dataIndex: "participant",
        key: "participant",
        width: 130,
        align: "center",
      },
      {
        title: "Hadir",
        dataIndex: "attendance",
        key: "attendance",
        width: 70,
        align: "center",
      },
    ],
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    institution: "John Brown",
    participant: i + 1,
    attendance: 1,
  });
}

const App = () => (
  <>
    <div className="container mt-36">
      <div className="w-full px-4">
        <div className="mb-10">
          <h1 className="text-3xl font-bold mb-2 text-slate-800">Pelatihan</h1>
          <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium magnam quaerat?</p>
        </div>
      </div>

      <Table
        className="px-5"
        pagination={false}
        columns={columns}
        dataSource={data}
        bordered
        size="middle"
        scroll={{
          x: "calc(700px + 50%)",
          y: 240,
        }}
      />
    </div>
  </>
);
export default App;
