import React, { useState } from "react";
import { Form, Input } from "antd";

const InfoPengguna = ({ detail, setFormData, formData }) => {
  const [user, setUser] = useState({});

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
          <Input disabled={true} value={detail?.id} onChange={(event) => setFormData({ ...formData, id: event.target.value })} />
        </Form.Item>
        <Form.Item label="Nama">
          <Input value={detail?.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
        </Form.Item>
        <Form.Item label="Email">
          <Input value={detail?.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
        </Form.Item>
      </Form>
    </>
  );
};

export default InfoPengguna;
