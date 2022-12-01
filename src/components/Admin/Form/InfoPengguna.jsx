import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import axios from "axios";

const InfoPengguna = ({ formData, setFormData }) => {
  // Integrasi
  const [user, setUser] = useState({});

  useEffect(() => {
    getAdminById();
  }, []);

  const getAdminById = async (id) => {
    await axios
      .get(`http://localhost:5000/api/v1/admin/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const getData = res.data.data;
        console.log(getData);
        setUser(getData);
      })
      .catch((error) => console.log(error));
  };

  // const getAdmin = async () => {
  //   await axios
  //     .get("http://localhost:5000/api/v1/admin", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((res) => {
  //       const getData = res.data.data;
  //       console.log(getData);
  //       setUser(getData);
  //     })
  //     .catch((error) => console.log(error));
  // };

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
          <Input disabled={true} value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} />
        </Form.Item>
        <Form.Item name="email" label="E-mail">
          <Input disabled={true} value={formData.email} />
        </Form.Item>
      </Form>
    </>
  );
};

export default InfoPengguna;
