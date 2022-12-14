import React from "react";
import { Form, Input, Upload, DatePicker, TimePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { RangePicker } = DatePicker;

const InputPelatihan = ({ formData, setFormData }) => {
  // Range time
  const rangeConfig = {
    rules: [
      {
        type: "array",
        required: true,
        message: "Input tanggal pelaksanaan pelatihan!",
      },
    ],
  };

  const startDate = (date, dateString) => {
    // console.log(dateString)
    setFormData({...formData, startDate: dateString})
  }

  const endDate = (date, dateString) => {
    setFormData({...formData, endDate: dateString})
  }

  const registrationDate = (date, dateString) => {
    setFormData({...formData, registrationDate: dateString})
  }

  const time = (time, timeString) => {
    setFormData({...formData, time: timeString})
  }

  // Time
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Input waktu pelaksanaan pelatihan!",
      },
    ],
  };

  return (
    <>
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
              message: "Input nama pelatihan!",
            },
          ]}
        >
          <Input value={formData.trainingName} onChange={(event) => setFormData({ ...formData, trainingName: event.target.value })} />
        </Form.Item>
        <Form.Item
          name="deskripsi"
          label="Deskripsi"
          rules={[
            {
              required: true,
              message: "Input deskripsi pelatihan!",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} value={formData.description} onChange={(event) => setFormData({ ...formData, description: event.target.value })} />
        </Form.Item>
        {/* <Form.Item name="range-picker" label="Tanggal pelaksanaan" {...rangeConfig}>
          <RangePicker value={formData.startDate} onChange={(event) => setFormData({ ...formData, startDate: event.target.value })} />
        </Form.Item> */}
        <Form.Item
          name="startDate"
          label="Tanggal Mulai"
          rules={[
            {
              required: true,
              message: "Input tanggal pelaksanaan!",
            },
          ]}
        >
          <DatePicker value={formData.startDate} onChange={startDate} />
        </Form.Item>
        <Form.Item
          name="endDate"
          label="Tanggal Selesai"
          rules={[
            {
              required: true,
              message: "Input tanggal pelaksanaan!",
            },
          ]}
        >
          <DatePicker value={formData.endDate} onChange={endDate} />
        </Form.Item>
        <Form.Item name="time-picker" label="Waktu Pelaksanaan" {...config}>
          <TimePicker value={formData.time} onChange={time} />
        </Form.Item>
        <Form.Item
          name="location"
          label="Lokasi"
          rules={[
            {
              required: true,
              message: "Input lokasi pelatihan!",
            },
          ]}
        >
          <Input value={formData.location} onChange={(event) => setFormData({ ...formData, location: event.target.value })} />
        </Form.Item>

        <Form.Item
          name="city"
          label="Kota"
          rules={[
            {
              required: true,
              message: "Input kota pelatihan!",
            },
          ]}
        >
          <Input value={formData.city} onChange={(event) => setFormData({ ...formData, city: event.target.value })} />
        </Form.Item>

        <Form.Item
          name="image"
          label="Gambar"
          valuePropName="fileList"
          rules={[
            {
              required: true,
              message: "Input gambar!",
            },
          ]}
        >
          <Upload action="/upload.do" listType="picture-card" value={formData.img} onChange={(event) => setFormData({ ...formData, img: event.target.value })}>
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
              message: "Input batas tanggal pendaftaran!",
            },
          ]}
        >
          <DatePicker value={formData.registrationDate} onChange={registrationDate} />
        </Form.Item>
      </Form>
    </>
  );
};

export default InputPelatihan;
