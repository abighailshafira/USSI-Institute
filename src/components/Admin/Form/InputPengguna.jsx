import React from "react";
import { Form, Input, Button } from "antd";
import { FiChevronLeft } from "react-icons/fi";

const inputPengguna = () => {
  return (
    <>
      <div className="dashboard-card mt-10">
        <h2 className="text-slate-800 flex items-center text-lg mb-5">
          <a href="#">
            <FiChevronLeft className="w-4 h-4 text-cyan-500 mr-3" />
          </a>
          Tambah Pengguna
        </h2>

        <Form
          labelCol={{
            span: 3,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          labelAlign="left"
        >
          <Form.Item label="Kode">
            <Input disabled={true} />
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
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="mt-2">
              Tambah
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default inputPengguna;
