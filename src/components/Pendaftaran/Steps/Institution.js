import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

function Institution({ formData, setFormData }) {
  const [pelatihan, setPelatihan] = useState([]);
  const [info, setInfo] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getPelatihan();
    if (id) {
      getPelatihanById();
    }
    getPendaftaran();
  }, []);

  const getPelatihan = async () => {
    await axios.get("http://localhost:5000/api/v1/detail/training").then((res) => {
      const getData = res.data.data;
      setPelatihan(getData);
      // console.log(res.data.data);
    });
  };

  const getPelatihanById = async () => {
    await axios.get(`http://localhost:5000/api/v1/detail/training/${id}`).then((res) => {
      const getData = res.data.data;
      setFormData(getData);
      // console.log(res.data.data);
    });
  };

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

  return (
    <div className="text-slate-800">
      <div className="mb-4">
        <label for="trainingName" className="text-base">
          Pelatihan
        </label>
        <select
          id="trainingName"
          className="form-control block w-full px-2 py-1.5 text-sm bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          value={formData.trainingName}
          onChange={(event) => setFormData({ ...formData, trainingName: event.target.value })}
        >
          <option selected></option>
          {pelatihan.map((d) => (
            <option value={d.trainingName}>{d.trainingName}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label for="institutionName" className="text-base">
          Nama Lembaga
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          id="institutionName"
          placeholder="Nama Lembaga"
          disabled={true}
          value={info.institutionName}
          onChange={(event) => setFormData({ ...formData, institutionName: event.target.value })}
        />
      </div>

      <div className="mb-4">
        <label for="institutionAddress" className="text-base">
          Alamat Lembaga
        </label>
        <input
          type="text"
          className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
          id="institutionAddress"
          placeholder="Alamat Lembaga"
          disabled={true}
          value={info.institutionAddress}
          onChange={(event) => setFormData({ ...formData, institutionAddress: event.target.value })}
        />
      </div>
    </div>
  );
}

export default Institution;
