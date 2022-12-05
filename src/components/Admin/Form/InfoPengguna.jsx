import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";
// import axios from "axios";

const InfoPengguna = ({ detail }) => {
  // const [user, setUser] = useState({});

  // Integrasi
  // useEffect(() => {
  //   getAdminById();
  // }, []);

  // const getAdminById = async (id) => {
  //   await axios
  //     .get(`http://localhost:5000/api/v1/admin/${id}`, {
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
  console.log(detail?.name);

  return (
    <>
      {/* <p>{detail?.name}</p> */}
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
          <Input value={detail?.name} />
        </Form.Item>
        <Form.Item name="email" label="E-mail">
          <Input value={detail?.email} />
        </Form.Item>
      </Form>
    </>
  );
};

export default InfoPengguna;
