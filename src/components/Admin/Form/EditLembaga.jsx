import React from "react";
import { Form, Input, Button, Select } from "antd";
import { FiChevronLeft } from "react-icons/fi";

const EditLembaga = () => {
  return (
    <>
      <div className="dashboard-card mt-10">
        <h2 className="text-slate-800 flex items-center text-lg mb-7">
          <a href="#">
            <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-3" />
          </a>
          Edit Lembaga
        </h2>
        <Form
          labelCol={{
            span: 4,
          }}
          layout="horizontal"
          labelAlign="left"
        >
          <Form.Item
            name="code"
            label="Kode Lembaga"
            rules={[
              {
                required: true,
                message: "Please input your ...",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="institutionName"
            label="Nama Lembaga"
            rules={[
              {
                required: true,
                message: "Please input your ...",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="institutionAddress"
            label="Alamat Lembaga"
            rules={[
              {
                required: true,
                message: "Please input your ...",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="province"
            label="Provinsi"
            rules={[
              {
                required: true,
                message: "Please input your ...",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore="+62"
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="CPName"
            label="Nama CP"
            rules={[
              {
                required: true,
                message: "Please input your ...",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="CPPhone"
            label="Kontak CP"
            rules={[
              {
                required: true,
                message: "Please input your ...",
              },
            ]}
          >
            <Input
              addonBefore="+62"
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="statusSLA"
            label="Status SLA"
            rules={[
              {
                required: true,
                message: "Please input your ...",
              },
            ]}
          >
            <Select>
              <Select.Option value="0">0</Select.Option>
              <Select.Option value="1">1</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item className="flex justify-end">
            <Button type="primary" className="mt-2">
              Simpan
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default EditLembaga;
