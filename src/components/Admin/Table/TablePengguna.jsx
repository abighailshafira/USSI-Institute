import React from "react";
import { Space, Table } from "antd";

const TablePengguna = () => {
  // Table
  const columns = [
    {
      title: "Kode",
      dataIndex: "code",
      key: "code",
      width: 150,
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
      width: 300,
      sorter: (a, b) => a.code - b.code,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 400,
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: () => (
        <Space size="middle">
          <a>Info</a>
          <a>Edit</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data = [];
  for (let i = 0; i < 10; i++) {
    data.push({
      key: i,
      code: i + 1,
      email: "ussiinstitute.pps@gmail.com",
    });
  }

  return (
    <>
      <Table columns={columns} dataSource={data} bordered size="middle" />
    </>
  );
};

export default TablePengguna;
