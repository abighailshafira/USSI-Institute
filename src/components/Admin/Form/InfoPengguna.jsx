import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
import axios from "axios";

const InfoPengguna = () => {
  // Integrasi
  const [user, setUser] = useState({});

  useEffect(() => {
    getAdmin();
  }, []);

  const getAdmin = async () => {
    await axios
      .get("http://localhost:5000/api/v1/admin", {
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
          <Input disabled={true} value={user.name} />
        </Form.Item>
        <Form.Item name="email" label="E-mail">
          <Input disabled={true} value={user.email} />
        </Form.Item>
      </Form>
    </>
  );
};

export default InfoPengguna;
