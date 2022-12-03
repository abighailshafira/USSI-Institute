import React from "react";
import { Form, Input } from "antd";

const inputPengguna = ({ formData, setFormData }) => {
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
          <Input value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
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
          <Input value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
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
          <Input.Password value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
        </Form.Item>
      </Form>
    </>
  );
};

export default inputPengguna;
