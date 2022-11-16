import React, { useEffect, useState } from "react";
import Image from "../../assets/image/pendaftaran.png";
import axios from "axios";
import ReactSelect from "react-select";
import Institution from "./Steps/Institution";
import Personal from "./Steps/Personal";
import Payment from "./Steps/Payment";
import { useNavigate } from "react-router-dom";

const FormDaftar = () => {
  const [pendaftaran, setPelatihan] = useState([]);
  useEffect(() => {}, []);
  const [formData, setFormData] = useState({
    trainingName: "",
    institutionName: "",
    institutionAddress: "",
    name: "",
    city: "",
    phone: "",
    // gender: "",
    payment: "",
  });

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

  // const [city, setCity] = useState("");
  // const [getCity, setGetCity] = useState("");
  // const [selectedCity, setSelectedCity] = useState(null);

  // useEffect(() => {
  //   apiCity();
  // }, []);

  // const apiCity = async () => {
  //   await axios.get(`https://binderbyte.com/wilayah/kabupaten`).then((res) => {
  //     const getData = res.data.data;
  //     // setGetCity(getData);
  //     console.log(getData);
  //   });
  // };

  // function handleChangeCity(value) {
  //   setCity(value.value);
  //   setSelectedCity(value);
  // }

  // const optionsCity = getCity.map((d) => {
  //   return (
  //     label: d.name,
  //   value: d.name
  //   )
  // })

  // console.log(getCity?.map((d) => d.nama));
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
    const userData = new URLSearchParams();
    // console.log(userData);
    userData.append("trainingName", formData.trainingName);
    userData.append("institutionName", formData.institutionName);
    userData.append("institutionAddress", formData.institutionAddress);
    userData.append("name", formData.name);
    userData.append("city", formData.city);
    userData.append("phone", formData.phone);
    // userData.append("karyawan", formData.employees);
    userData.append("payment", formData.payment);

    for (var pair of userData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }

    axios({
      method: "put",
      // url: `${Url}/warehouses/${id}`, isi urlnya ya cok jel
      data: userData,
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${auth.token}`, ini diisi kalo ada auth token dari redux ya cok
      },
    })
      .then((res) => {
        //handle success
        console.log(res);
        // navigate("/"); ini untuk navigate ke halaman lain
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
              <h2 className="font-semibold text-lg text-cyan-500 mb-0">
                Pendaftaran
              </h2>
              <h1 className="text-3xl font-bold mb-2 text-slate-800">
                Pendaftaran Pelatihan
              </h1>
              <p className="text-base text-slate-500">
                Silahkan lengkapi form pendaftaran dengan benar.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center rounded-lg shadow-xl bg-white mx-auto">
            <div className="w-full md:w-1/2">
              <img src={Image} className="w-full" />
            </div>

            <div className="w-full px-10 md:w-1/2 md:pl-0 py-5">
              <div className="mb-5">
                <h3 className="font-semibold text-xl text-cyan-500">
                  {FormTitles[page]}
                </h3>
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
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-cyan-500 text-white font-semibold text-sm leading-tight rounded-md cursor-pointer hover:bg-cyan-600 transition duration-300 ease-in-out"
                    >
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
