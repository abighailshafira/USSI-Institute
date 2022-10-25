import React from "react";

function Institution({ formData, setFormData }) {
  return (
    // <input className="m-5 w-[200px] h-[40px] pl-1 text-base" type="text" placeholder="Email..." value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} />
    // <input className="m-5 w-[200px] h-[40px] pl-1 text-base" type="text" placeholder="Password..." value={formData.password} onChange={(event) => setFormData({ ...formData, password: event.target.value })} />
    // <input className="m-5 w-[200px] h-[40px] pl-1 text-base" type="text" placeholder="Confirm Password..." value={formData.confirmPassword} onChange={(event) => setFormData({ ...formData, confirmPassword: event.target.value })} />

    <div className="text-slate-800">
      <div className="mb-4">
        <label className="text-base">Pelatihan</label>
        <select className="form-control block w-full px-2 py-1.5 text-sm bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div className="mb-4">
        <label for="namaLembaga" className="text-base">
          Nama Lembaga
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          id="namaLembaga"
          placeholder="Nama Lembaga"
        />
      </div>

      <div className="mb-4">
        <label for="alamatLembaga" className="text-base">
          Alamat Lembaga
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          id="alamatLembaga"
          placeholder="Alamat Lembaga"
        />
      </div>
    </div>
  );
}

export default Institution;
