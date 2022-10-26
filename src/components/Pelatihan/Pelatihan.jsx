import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'NamNama BPR',
    dataIndex: 'name',
    key: 'name',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'John',
        value: 'John',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Jumlah Peserta',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
      {
        title: 'Hadir',
        dataIndex: 'street',
        key: 'street',
        width: 150,
      },
    ],
  },
  {
    title: 'PELATIHAN DAN TRIAL ERROR APLIKASI Obox 1 (Januari)',
    children: [
      {
        title: 'Total',
        dataIndex: 'age',
        key: 'age',
        width: 150,
      },
    ],
  },
];
const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: i + 1,
    street: 'Lake Park',
    building: 'C',
    number: 2035,
    companyAddress: 'Lake Street 42',
    companyName: 'SoftLake Co',
    gender: 'M',
  });
}
const App = () => (
    <><div className='container pt-36'>
        <Table
            pagination={false}
            columns={columns}
            dataSource={data}
            bordered
            size="middle"
            scroll={{
                x: 'calc(700px + 50%)',
                y: 240,
        }} />
    </div>
    </>
);
export default App;