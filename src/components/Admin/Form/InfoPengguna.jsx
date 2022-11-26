import React from "react";
import { Form, Input } from "antd";

const InfoPengguna = () => {
  return (
    <>
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
    </>
  );
};

export default InfoPengguna;
