import React from "react";
import { Form, Input, Button, Select } from "antd";

const InputLembaga = ({ formData, setFormData }) => {
  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        layout="horizontal"
        labelAlign="left"
      >
        <Form.Item name="code" label="Kode Lembaga">
          <Input
            value={formData.institutionName}
            onChange={(event) =>
              setFormData({ ...formData, institutionName: event.target.value })
            }
          />
        </Form.Item>
        <Form.Item name="institutionName" label="Nama Lembaga">
          <Input />
        </Form.Item>
        <Form.Item name="institutionAddress" label="Alamat Lembaga">
          <Input />
        </Form.Item>
        <Form.Item name="province" label="Provinsi">
          <Input />
        </Form.Item>
        <Form.Item name="email" label="E-mail">
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
          <Input
            addonBefore="+62"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item name="CPName" label="Nama CP">
          <Input />
        </Form.Item>
        <Form.Item name="CPPhone" label="Kontak CP">
          <Input
            addonBefore="+62"
            style={{
              width: "100%",
            }}
          />
        </Form.Item>
        <Form.Item name="statusSLA" label="Status SLA">
          <Select>
            <Select.Option value="0">0</Select.Option>
            <Select.Option value="1">1</Select.Option>
          </Select>
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

export default InputLembaga;
