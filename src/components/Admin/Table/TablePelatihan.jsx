import React, { useState } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from "antd";

// Data
const originData = [];
for (let i = 0; i < 10; i++) {
  originData.push({
    key: i.toString(),
    trainingName: "Pelatihan dan Petunjuk Teknis Pelaporan dan Solusi Permasalahan LAPBUL",
    description: "32",
    startDate: `Pelatihan ${i}`,
    endDate: `Pelatihan ${i}`,
    time: `Pelatihan ${i}`,
    location: `Pelatihan ${i}`,
    image: `Pelatihan ${i}`,
    pendaftaran: `Pelatihan ${i}`,
  });
}

const EditableCell = ({ editing, dataIndex, title, inputType, record, index, children, ...restProps }) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const TablePelatihan = () => {
  // Table
  const columns = [
    {
      title: "Nama Pelatihan",
      dataIndex: "trainingName",
      key: "trainingName",
      width: 150,
      editable: true,
      fixed: "left",
      sorter: (a, b) => a.trainingName - b.trainingName,
    },
    {
      title: "description",
      dataIndex: "description",
      width: 150,
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
    },
    {
      title: "Tanggal Selesai",
      dataIndex: "endDate",
      key: "endDate",
      width: 80,
      editable: true,
      sorter: (a, b) => a.endDate - b.endDate,
    },
    {
      title: "Waktu",
      dataIndex: "time",
      key: "time",
      width: 50,
      editable: true,
      sorter: (a, b) => a.time - b.time,
    },
    {
      title: "Lokasi",
      dataIndex: "location",
      key: "location",
      width: 100,
      editable: true,
      sorter: (a, b) => a.location - b.location,
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
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      width: 120,
      align: "center",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ""} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.key === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      trainingName: "",
      description: "",
      startDate: "",
      endDate: "",
      time: "",
      location: "",
      image: "",
      pendaftaran: "",
      ...record,
    });
    setEditingKey(record.key);
  };
  const cancel = () => {
    setEditingKey("");
  };
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "description" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
          size="middle"
          scroll={{
            x: "calc(1000px + 50%)",
            y: 500,
          }}
        />
      </Form>
    </>
  );
};

export default TablePelatihan;
