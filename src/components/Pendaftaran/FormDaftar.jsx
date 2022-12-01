import React, { useEffect, useState } from "react";
import Image from "../../assets/image/pendaftaran.png";
import axios from "axios";
import Institution from "./Steps/Institution";
import Personal from "./Steps/Personal";
import Payment from "./Steps/Payment";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";

const FormDaftar = () => {
  const [pendaftaran, setPelatihan] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    getPendaftaran();
    setFormData({ userId: info?.User?.id });
  }, []);

  const [formData, setFormData] = useState({
    userId: info?.User?.id || 0,
    city: "",
    phone: "",
    gender: "",
    payment: "",
  });
  console.log(info);
  const navigate = useNavigate();

  const getPelatihan = async (data) => {
    await axios
      .post("http://localhost:5000/api/v1/registration", {
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      })
      .then((res) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
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

  const [page, setPage] = useState(0);

  const FormTitles = ["Informasi Lembaga", "Profil Peserta", "Pembayaran"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Institution formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else {
      return <Payment formData={formData} setFormData={setFormData} />;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    axios({
      method: "post",
      url: `http://localhost:5000/api/v1/registration`,
      data: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        //handle success
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          console.log("err.response ", err.response);
        } else if (err.request) {
          console.log("err.request ", err.request);
        } else if (err.message) {
          // do something other than the other two
        }
      });
    Swal.fire({ title: "Berhasil!", text: "Pendaftaran berhasil!", icon: "success" });
    // navigate("/pendaftaran");
    // setTimeout(window.location.reload.bind(window.location), 800);

    // getPelatihan(formData);
  };

  return (
    <>
      {/* <section id="form-daftar" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center rounded-lg shadow-xl bg-white mx-auto">
            <div className="w-full p-10 md:w-1/2">
              <form>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="form-group mb-4">
                    <label for="asalKota" className="text-base">
                      Asal Kota
                    </label>
                    <ReactSelect
                      className="basic-single"
                      placeholder="Pilih Kota ..."
                      classNamePrefix="select"
                      // value={selectedCity}
                      // isLoading={isLoading}
                      getOptionLabel={(e) => e.name}
                      getOptionValue={(e) => e.id}
                      isSearchable
                      options={getCity}
                      // onChange={handleChangeCity}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
      </section> */}

      <section id="form-daftar" className="pt-36">
        <div className="container max-w-6xl">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h2 className="font-semibold text-lg text-cyan-500 mb-0">Pendaftaran</h2>
              <h1 className="text-3xl font-bold mb-2 text-slate-800">Pendaftaran Pelatihan</h1>
              <p className="text-base text-slate-500">Silahkan lengkapi form pendaftaran dengan benar.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center rounded-lg shadow-xl bg-white mx-auto">
            <div className="w-full md:w-1/2">
              <img src={Image} className="w-full" />
            </div>

            <div className="w-full px-10 md:w-1/2 md:pl-0 py-5">
              <div className="mb-5">
                <h3 className="font-semibold text-xl text-cyan-500">{FormTitles[page]}</h3>
              </div>

              <div className="w-full h-3 bg-slate-100 mb-5 rounded-md">
                <div
                  className="w-[33.3%] h-full bg-cyan-500 rounded-md shadow-md"
                  style={{
                    width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
                  }}
                ></div>
              </div>

              <form>{PageDisplay()}</form>

              <div className="flex justify-center gap-2">
                <button
                  className="px-6 py-2.5 border-cyan-500 border-2 text-cyan-500 text-sm font-semibold leading-tight rounded-md cursor-pointer hover:bg-cyan-500 hover:text-white transition duration-300 ease-in-out"
                  disabled={page === 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                  }}
                >
                  Kembali
                </button>
                {page === FormTitles.length - 1 ? (
                  <form onSubmit={handleSubmit}>
                    <button type="submit" className="px-6 py-3 bg-cyan-500 text-white font-semibold text-sm leading-tight rounded-md cursor-pointer hover:bg-cyan-600 transition duration-300 ease-in-out">
                      Daftar
                    </button>
                  </form>
                ) : (
                  <button
                    className="px-6 py-2.5 bg-cyan-500 text-white font-semibold text-sm leading-tight rounded-md cursor-pointer hover:bg-cyan-600 transition duration-300 ease-in-out"
                    onClick={() => {
                      // if (page === FormTitles.length - 1) {
                      // alert("FORM SUBMITTED");
                      // console.log(formData);

                      // } else {
                      setPage((currPage) => currPage + 1);
                      // }
                    }}
                  >
                    Selanjutnya
                  </button>
                )}
                {/* <form onSubmit={}>
                  <button
                    className="px-6 py-2.5 bg-cyan-500 text-white font-semibold text-sm leading-tight rounded-md cursor-pointer hover:bg-cyan-600 transition duration-300 ease-in-out"
                    onClick={() => {
                      if (page === FormTitles.length - 1) {
                        alert("FORM SUBMITTED");
                        // console.log(formData);
                        getPelatihan();
                      } else {
                        setPage((currPage) => currPage + 1);
                      }
                    }}
                  >
                    {page === FormTitles.length - 1 ? "Daftar" : "Selanjutnya"}
                  </button>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormDaftar;
