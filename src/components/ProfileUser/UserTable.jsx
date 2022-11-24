import { Table } from "antd";
import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Tag } from "antd";

const columns = [
  {
    title: "Kegiatan",
    dataIndex: "name",
    key: "name",
    width: 350,
  },
  {
    title: "Tanggal Mulai",
    dataIndex: "age",
    key: "age",
    width: 150,
  },
  {
    title: "Tanggal Selesai",
    dataIndex: "age",
    key: "age",
    width: 150,
  },
  {
    title: "Lokasi",
    dataIndex: "location",
    key: "location",
    width: 200,
  },
  {
    title: "Kota",
    dataIndex: "city",
    key: "city",
    width: 100,
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
  },
];

const data = [];
for (let i = 0; i < 15; i++) {
  data.push({
    number: i + 1,
    name: "Pelatihan Sertifikasi Teknisi Muda Jaringan Komputer",
    age: i + 1,
    location: "Hotel Grand Cordella",
    city: "Bandung",
  });
}
const App = () => (
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
export default App;
