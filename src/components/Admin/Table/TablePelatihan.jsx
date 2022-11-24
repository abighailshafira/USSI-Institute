import React, { useState, useRef } from "react";
import { Form, Input, InputNumber, Popconfirm, Table, Typography, Space, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";
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

  // Table
  const columns = [
    {
      title: "Nama Pelatihan",
      dataIndex: "trainingName",
      key: "trainingName",
      width: 150,
      editable: true,
      fixed: "left",
      sorter: (a, b) => a.trainingName.localeCompare(b.trainingName),
      ...getColumnSearchProps("trainingName"),
    },
    {
      title: "description",
      dataIndex: "description",
      width: 180,
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
      ...getColumnSearchProps("startDate"),
    },
    {
      title: "Tanggal Selesai",
      dataIndex: "endDate",
      key: "endDate",
      width: 80,
      editable: true,
      sorter: (a, b) => a.endDate - b.endDate,
      ...getColumnSearchProps("endDate"),
    },
    {
      title: "Waktu",
      dataIndex: "time",
      key: "time",
      width: 50,
      editable: true,
      sorter: (a, b) => a.time - b.time,
      ...getColumnSearchProps("time"),
    },
    {
      title: "Lokasi",
      dataIndex: "location",
      key: "location",
      width: 100,
      editable: true,
      sorter: (a, b) => a.location.localeCompare(b.location),
      ...getColumnSearchProps("location"),
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
      ...getColumnSearchProps("pendaftaran"),
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
            x: "calc(1200px + 50%)",
            y: 500,
          }}
        />
      </Form>
    </>
  );
};

export default TablePelatihan;
