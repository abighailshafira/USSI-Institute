import React, { useContext, useEffect, useRef, useState } from "react";
import { Space, Table, Button, Form, Modal, Input, Upload,Tag } from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";

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

const TablePeserta = () => {
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
      no: "1",
      name: "Edward King 0",
      bpr: "BPR Tangerang",
      tgl_mulai: "12/02/2022",
      tgl_selesai: "12/03/2022",
      tags: ['Download'],
    },
    {
      key: "2",
      no: "2",
      name: "Zayn King 1",
      bpr: "BPR Bandung",
      tgl_mulai: "12/02/2022",
      tgl_selesai: "12/03/2022",
      tags: ['Download'],
    },
  ]);
  const [count, setCount] = useState(2);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const defaultColumns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      width: 50,
    },
    {
      title: "Nama",
      dataIndex: "name",
      key: "name",
      width: 300,
    },
    {
      title: "Asal BPR",
      dataIndex: "bpr",
      key: "bpr",
      width: 300,
    },
    {
      title: "Kegiatan",
      dataIndex: "kegiatan",
      key: "kegiatan",
      width: 300,
    },
    {
      title: "Tanggal Mulai",
      dataIndex: "tgl_mulai",
      key: "tgl_mulai",
      width: 400,
    },
    {
      title: "Tanggal Selesai",
      dataIndex: "tgl_selesai",
      key: "tgl_selesai",
      width: 400,
    },
    {
      title: "Sertifikat Kehadiran",
      dataIndex: "sertificate",
      align: "center",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Space size="middle">
            <Button type="primary" icon={<UploadOutlined />} onClick={showModal} />
          </Space>
        ) : null,
    },
    {
      title: 'Status',
      key: 'Status',
      dataIndex: 'status',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'Download') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
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
        <Form.Item
            name="File"
            label="File"
            valuePropName="fileList"
            rules={[
              {
                required: true,
                message: "Please input Intro",
              },
            ]}
          >
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                    marginLeft: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TablePeserta;
