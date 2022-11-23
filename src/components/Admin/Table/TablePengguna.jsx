import React, { useContext, useEffect, useRef, useState } from "react";
import { Space, Table, Button, Form, Modal, Input, Popconfirm } from "antd";
import { InfoOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

// Delete row
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            messcode: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const TablePengguna = () => {
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // Table
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      name: "Edward King 0",
      code: "30",
      email: "ussiinstitute.pps@gmail.com",
    },
    {
      key: "2",
      name: "Zayn King 1",
      code: "32",
      email: "ussiinstitute.pps@gmail.com",
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
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
      sorter: (a, b) => a.name - b.name,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 400,
      sorter: (a, b) => a.email - b.email,
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      align: "center",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Space size="middle">
            <Button type="primary" icon={<InfoOutlined />} onClick={showModal} />
            {/* <Button icon={<EditOutlined />} /> */}
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <Button type="primary" danger icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });

  return (
    <>
      <div>
        <Table components={components} rowClassName={() => "editable-row"} bordered dataSource={dataSource} columns={columns} size="middle" />
      </div>

      <Modal title="Info Pengguna" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
          labelCol={{
            span: 4,
          }}
          layout="horizontal"
          labelAlign="left"
        >
          <Form.Item label="Kode">
            <Input disabled={true} />
          </Form.Item>
          <Form.Item name="name" label="Nama">
            <Input disabled={true} />
          </Form.Item>
          <Form.Item name="email" label="E-mail">
            <Input disabled={true} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TablePengguna;
