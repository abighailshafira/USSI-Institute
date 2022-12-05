import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import axios from "axios";
import jwtDecode from "jwt-decode";

function Personal({ formData, setFormData }) {
  const [value, setValue] = useState(1);
  const [info, setInfo] = useState({});

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    getPendaftaran();
  }, []);

  const { auth } = JSON.parse(localStorage.getItem("persist:auth"));
  const { accessToken } = JSON.parse(auth);
  // console.log(accessToken);
  const bebas = jwtDecode(accessToken);

  const getPendaftaran = () => {
    axios.get(`http://localhost:5000/api/v1/manuk/${bebas.id}`).then((res) => {
      // console.log(res.data.data);
      setInfo(res.data.data);
    });
  };

  console.log(info?.User?.id);

  return (
    <div className="text-slate-800">
      <div className="mb-4">
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          id="name"
          placeholder="Nama Peserta"
          value={info?.User?.id}
          onChange={(event) => setFormData({ ...formData, userId: info?.User?.id })}
          required
          hidden
        />
      </div>

      <div className="mb-4">
        <label for="name" className="text-base">
          Nama Peserta
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          id="name"
          placeholder="Nama Peserta"
          value={info?.User?.name}
          disabled
          onChange={(event) => setFormData({ ...formData, name: event.target.value })}
          required
        />
      </div>

      <div className="form-group mb-4">
        <label for="city" className="text-base">
          Asal Kota
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          id="city"
          placeholder="Asal Kota"
          value={formData.city}
          onChange={(event) => setFormData({ ...formData, city: event.target.value })}
          required
        />
        {/* <ReactSelect
            id="city"
            className="basic-single"
            placeholder="Pilih Kota ..."
            classNamePrefix="select"
            // value={selectedCity}
            // isLoading={isLoading}
            getOptionLabel={(e) => e.name}
            getOptionValue={(e) => e.id}
            isSearchable
            // options={getCity}
            // onChange={handleChangeCity}
          /> */}
      </div>

      <div className="grid grid-cols-2 gap-2 md:gap-4">
        <div className="mb-4">
          <label for="phone" className="text-base">
            Nomor Telepon
          </label>
          <input
            type="text"
            className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
            id="phone"
            placeholder="Nomor Telepon"
            value={formData.phone}
            disabled
            onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label for="gender" className="text-base">
            Jenis Kelamin
          </label>
          <div className="flex items-center space-x-5 py-1.5">
            <Radio.Group onChange={(event) => setFormData({ ...formData, gender: event.target.value })}>
              <Radio value={1}>P</Radio>
              <Radio value={2}>L</Radio>
            </Radio.Group>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
