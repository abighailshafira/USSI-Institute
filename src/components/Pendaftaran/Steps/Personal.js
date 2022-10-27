import React from "react";

function Personal({ formData, setFormData }) {
  return (
    // <div className="personal-info-container">
    //   <input
    //     type="text"
    //     placeholder="First Name..."
    //     value={formData.firstName}
    //     onChange={(e) => {
    //       setFormData({ ...formData, firstName: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Last Name..."
    //     value={formData.lastName}
    //     onChange={(e) => {
    //       setFormData({ ...formData, lastName: e.target.value });
    //     }}
    //   />
    //   <input
    //     type="text"
    //     placeholder="Username..."
    //     value={formData.username}
    //     onChange={(e) => {
    //       setFormData({ ...formData, username: e.target.value });
    //     }}
    //   />
    // </div>
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
          />
        </div>

        <div className="form-group mb-4">
          <label for="gender" className="text-base">
            Jenis Kelamin
          </label>
          <div className="flex items-center space-x-5 py-1.5">
            <div className="flex items-center">
              <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
              <label for="radioButton1" className="pl-3 text-sm">
                P
              </label>
            </div>
            <div className="flex items-center">
              <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
              <label for="radioButton2" className="pl-3 text-sm">
                L
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;
