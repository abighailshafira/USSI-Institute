import React from "react";
import { Form, Input, Select } from "antd";

const EditLembaga = ({ detail, formData, setFormData }) => {
  const [form] = Form.useForm();

  const changeCode = (value) => {
    form.setFieldsValue({
      code: value,
    });
  };
  console.log(form);

  return (
    <>
      <Form
        labelCol={{
          span: 4,
        }}
        layout="horizontal"
        labelAlign="left"
      >
        <Form.Item label="Kode Lembaga">
          <Input value={detail?.code} onChange={(event) => setFormData({ ...formData, institutionName: event.target.value })} />
        </Form.Item>
        <Form.Item label="Nama Lembaga">
          <Input value={detail?.institutionName} onChange={(event) => setFormData({ ...formData, institutionName: event.target.value })} />
        </Form.Item>
        <Form.Item label="Alamat Lembaga">
          <Input
            value={detail?.institutionAddress}
            onChange={(event) =>
              setFormData({
                ...formData,
                institutionAddress: event.target.value,
              })
            }
          />
        </Form.Item>
        <Form.Item label="Provinsi">
          <Input value={detail?.province} onChange={(event) => setFormData({ ...formData, province: event.target.value })} />
        </Form.Item>
        <Form.Item label="E-mail">
          <Input value={detail?.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
        </Form.Item>
        <Form.Item label="Phone Number">
          <Input
            addonBefore="+62"
            style={{
              width: "100%",
            }}
            value={detail?.phone}
            onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
          />
        </Form.Item>
        <Form.Item label="Nama CP">
          <Input value={detail?.CPName} onChange={(event) => setFormData({ ...formData, CPName: event.target.value })} />
        </Form.Item>
        <Form.Item label="Kontak CP">
          <Input
            addonBefore="+62"
            style={{
              width: "100%",
            }}
            value={detail?.CPPhone}
            onChange={(event) => setFormData({ ...formData, CPPhone: event.target.value })}
          />
        </Form.Item>
        <Form.Item label="Status SLA">
          <Select value={detail?.statusSLA} onChange={(value) => setFormData({ ...formData, statusSLA: value })}>
            <Select.Option value="0">0</Select.Option>
            <Select.Option value="1">1</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditLembaga;
