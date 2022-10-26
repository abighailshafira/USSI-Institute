import { Table } from 'antd';
import React from 'react';
const columns = [
  {
    title: 'Other',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
  {
    title: 'Other',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
  {
    title: 'Other',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
  {
    title: 'Other',
    dataIndex: 'age',
    key: 'age',
    width: 150,
  },
  {
    title: 'Other',
    dataIndex: 'age',
    key: 'age',
    width: 150,
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
  <><div className='container'>
    
      <div className="w-full px-4 pt-36">
        <div className="mx-auto mb-10">
          <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">KEGIATAN</h1>
        </div>
      </div> 
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