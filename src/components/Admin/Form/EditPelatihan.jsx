import React from "react";
import { Form, Input, Button, Upload, DatePicker, TimePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { FiChevronLeft } from "react-icons/fi";

const { RangePicker } = DatePicker;

const EditPelatihan = () => {
  // Range time
  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  // Time
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };

  return (
    <>
      {" "}
      <Form
        labelCol={{
          span: 4,
        }}
        layout="horizontal"
        labelAlign="left"
      >
        <Form.Item
          name="trainingName"
          label="Nama Pelatihan"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="deskripsi"
          label="Deskripsi"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.Item name="range-picker" label="Tanggal pelaksanaan" {...rangeConfig}>
          <RangePicker />
        </Form.Item>
        <Form.Item name="time-picker" label="Waktu Pelaksanaan" {...config}>
          <TimePicker />
        </Form.Item>
        <Form.Item
          name="location"
          label="Lokasi"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Gambar"
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
                }}
              >
                Upload
              </div>
            </div>
          </Upload>
        </Form.Item>
        <Form.Item
          name="pendaftaran"
          label="Batas Pendaftaran"
          rules={[
            {
              required: true,
              message: "Please input Intro",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item className="flex justify-end">
          <Button type="primary" className="mt-2">
            Tambah
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditPelatihan;
