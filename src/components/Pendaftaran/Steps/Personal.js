import React, { useState } from "react";
import { Radio } from "antd";

function Personal({ formData, setFormData }) {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  return (
    <div className="text-slate-800">
      <div className="mb-4">
        <label for="name" className="text-base">
          Nama Peserta
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          id="name"
          placeholder="Nama Peserta"
          value={formData.name}
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
            onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
            required
          />
        </div>
        <div className="form-group mb-4">
          <label for="gender" className="text-base">
            Jenis Kelamin
          </label>
          <div className="flex items-center space-x-5 py-1.5">
            <Radio.Group onChange={onChange} value={value}>
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
