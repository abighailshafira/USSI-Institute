import { Table } from "antd";
import React from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Radio } from "antd";

const columns = [
  {
    title: "No",
    dataIndex: "number",
    key: "number",
    width: 35,
    align: "center",
  },
  {
    title: "Kegiatan",
    dataIndex: "name",
    key: "name",
    width: 200,
  },
  {
    title: "Tanggal Mulai",
    dataIndex: "age",
    key: "age",
    width: 100,
  },
  {
    title: "Tanggal Selesai",
    dataIndex: "age",
    key: "age",
    width: 100,
  },
  {
    title: "Lokasi",
    dataIndex: "location",
    key: "location",
    width: 150,
  },
  {
    title: "Kota",
    dataIndex: "city",
    key: "city",
    width: 100,
  },
  {
    title: "Sertifikat Kehadiran",
    dataIndex: "certificate",
    key: "certificate",
    width: 150,
    align: "center",
  },
  {
    title: "Keterangan",
    dataIndex: "age",
    key: "age",
    width: 150,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    number: i + 1,
    name: "Pelatihan Sertifikasi Teknisi Muda Jaringan Komputer",
    age: i + 1,
    location: "Hotel Grand Cordella",
    city: "Bandung",
    certificate: <Button type="primary" shape="round" icon={<DownloadOutlined />} />,
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
