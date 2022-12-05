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
          <input disabled={true} />
        </Form.Item>
        <Form.Item
          name="name"
          label="Nama"
          rules={[
            {
              required: true,
              message: "Input nama Anda!",
            },
          ]}
        >
          <input value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "Email tidak valid.",
            },
            {
              required: true,
              message: "Input email Anda",
            },
          ]}
        >
          <input value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Input password Anda!",
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
