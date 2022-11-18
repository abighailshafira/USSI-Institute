import { Table } from "antd";
import React from "react";

//contoh data tabel dan response BE
const dataBPR = [
  {
    id: 1,
    institutionName: "Universitas Brawijaya",
    detailTrainings: [
      {
        id: 1,
        trainingName: "Pelatihan Janauari",
        startDate: "Januari", // mengambil dari startdate lalu di convert ke bulan
        detail: {
          participants: 100, // jumlah peserta dari trainingname dan institutionName yang sama
          attendance: null, // jumlah peserta yang hadir dari trainingname dan institutionName yang sama
        },
      },
      {
        id: 2,
        trainingName: "Pelatihan Janauari",
        startDate: "Januari", // mengambil dari startdate lalu di convert ke bulan
        detail: {
          participants: 100, // jumlah peserta dari trainingname dan institutionName yang sama
          attendance: null, // jumlah peserta yang hadir dari trainingname dan institutionName yang sama
        },
      },
    ],
  },
];

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
    title: "Kode Client",
    align: "center",
    dataIndex: "kode",
    key: "kode",
    width: 100,
    align: "center",
 
  },
  {
    title: "Alamat",
    align: "center",
    dataIndex: "alamat",
    key: "alamat",
    width: 100,
    align: "center",
 
  },
  {
    title: "Email",
    align: "center",
    dataIndex: "email",
    key: "email",
    width: 100,
    align: "center",
 
  },
  {
    title: "Provinsi",
    align: "center",
    dataIndex: "provinsi",
    key: "provinsi",
    width: 100,
    align: "center",
 
  },
  {
    title: "No telp",
    align: "center",
    dataIndex: "telp",
    key: "telp",
    width: 100,
    align: "center",
 
  },
  {
    title: "Nama CP",
    align: "center",
    dataIndex: "participant",
    key: "participant",
    width: 100,
    align: "center",
 
  },
  {
    title: "Telp CP",
    align: "center",
    dataIndex: "telpCP",
    key: "telpCP",
    width: 100,
    align: "center",
 
  },
  {
    title: "Status SLA",
    align: "center",
    dataIndex: "status",
    key: "status",
    width: 100,
    align: "center",
 
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
          <h1 className="text-3xl font-bold mb-2 text-slate-800">Daftar BPR</h1>
          <p className="text-base text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis laudantium magnam quaerat?
          </p>
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
          y: 500,
        }}
      />
    </div>
  </>
);
export default App;
