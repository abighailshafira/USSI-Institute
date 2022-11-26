import React from "react";
import { Form, Input } from "antd";

const inputPengguna = () => {
  return (
    <>
      <Form
        labelCol={{
          span: 3,
        }}
        layout="horizontal"
        labelAlign="left"
      >
        <Form.Item
          name="code"
          label="Kode"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input disabled={true} />
        </Form.Item>
        <Form.Item
          name="name"
          label="Nama"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
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
      </Form>
    </>
  );
};

export default inputPengguna;
