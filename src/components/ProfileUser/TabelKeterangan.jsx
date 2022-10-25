import { Space, Table, Tag } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'keterangan',
    dataIndex: 'keterangan',
    key: 'keterangan',
  },
];
const data = [
  {
    key: '1',
    status: 'DOWNLOAD',
    keterangan : 'Sertifikat belum di-download',

  },
  {
    key: '2',
    status: 'LULUS',
    keterangan : 'Sertifikat masih dalam proses',
  },
  {
    key: '3',
    status: 'TIDAK LULUS',
    keterangan : 'Tidak memperoleh sertifikat',
  },
  {
    key: '3',
    status: 'MENUNGGU HASIL',
    keterangan : 'Menunggu hasil ujian',
  },
];
const App = () => <Table className='p-10 w-1/2' columns={columns} dataSource={data} />;
export default App;