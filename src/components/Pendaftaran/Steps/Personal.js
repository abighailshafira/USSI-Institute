import React from "react";

function Personal({ formData, setFormData }) {
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

      {/* <div className="grid grid-cols-2 gap-2 md:gap-4">
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
          />
        </div>
      </div> */}

      <div className="form-group mb-4">
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
          />
        </div>
      </div>
    </div>
  );
}

export default Personal;
