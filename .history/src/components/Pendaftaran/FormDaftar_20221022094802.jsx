import React, { useEffect, useState } from "react";
import Image from "../../assets/image/register.png";
import axios from "axios";
import ReactSelect from "react-select";

const FormDaftar = () => {
  const [city, setCity] = useState("");
  const [getCity, setGetCity] = useState("");
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    apiCity();
  }, []);

  const apiCity = async () => {
    await axios
      .get(`https://kabupatenid.herokuapp.com/kabupaten/list`)
      .then((res) => {
        const getData = res.data.data;
        setGetCity(getData);
        // console.log(getData.map((d) => d.nama));
      });
  };

  function handleChangeCity(value) {
    setCity(value.value);
    setSelectedCity(value);
  }

  // const optionsCity = getCity.map((d) => {
  //   return {
  //     label: d.nama,
  //     value: d.nama,
  //   };
  // });

  // const optionsCity = getCity.map((d) => {
  //   return (
  //     label: d.name,
  //   value: d.name
  //   )
  // })

  console.log(getCity?.map((d) => d.nama));

  return (
    <>
      <section id="form-daftar" className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-10">
              <h2 className="font-semibold text-lg text-cyan-500">
                Pendaftaran
              </h2>
              <h1 className="text-3xl font-bold mb-2">Pendaftaran Pelatihan</h1>
              <p className="text-base text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, nemo!
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center rounded-lg shadow-xl bg-white mx-auto">
            <div className="w-full md:w-1/2">
              <img src={Image} alt="" className="w-full" />
            </div>

            <div className="w-full p-10 md:w-1/2">
              <form>
                <div className="form-group mb-4">
                  <label for="subject" className="text-base">
                    Pelatihan
                  </label>
                  <select className="form-control block w-full px-2 py-1.5 text-base bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="form-group mb-4">
                  <label for="namaLembaga" className="text-base">
                    Nama Lembaga
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    id="namaLembaga"
                    placeholder="Nama Lembaga"
                  />
                </div>

                <div className="form-group mb-4">
                  <label for="alamatLembaga" className="text-base">
                    Alamat Lembaga
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    id="alamatLembaga"
                    placeholder="Alamat Lembaga"
                  />
                </div>

                <div className="form-group mb-4">
                  <label for="name" className="text-base">
                    Nama Peserta
                  </label>
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    id="name"
                    placeholder="Nama Peserta"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  <div className="form-group mb-4">
                    <label for="phone" className="text-base">
                      Nomor Telepon
                    </label>
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      id="phone"
                      placeholder="Nomor Telepon"
                    />
                  </div>
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

                <div className="form-group mb-4">
                  <label for="asalKota" className="text-base">
                    Jenis Kelamin
                  </label>
                  <div className="flex items-center space-x-5">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton1"
                        className="h-5 w-5"
                      />
                      <label for="radioButton1" className="pl-3 text-base">
                        P
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="radio1"
                        id="radioButton2"
                        className="h-5 w-5"
                      />
                      <label for="radioButton2" className="pl-3 text-base">
                        L
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-group mb-4">
                  <label for="asalKota" className="text-base">
                    Bukti Pembayaran
                  </label>
                  <div className="mb-8">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="sr-only"
                    />
                    <label
                      for="file"
                      className="relative flex min-h-[200px] justify-center items-center rounded-md border border-dashed py-8 text-center"
                    >
                      <div>
                        <span className="mb-2 block text-lg font-semibold">
                          {" "}
                          Drop files here{" "}
                        </span>
                        <span className="mb-2 block text-base"> Or </span>
                        <span className="inline-flex rounded-md border py-1 px-7 text-base cursor-pointer">
                          {" "}
                          Browse{" "}
                        </span>
                      </div>
                    </label>
                    <p className="text-sm text-slate-500">
                      Silahkan upload bukti pembayaran dan konfirmasi atas
                      pembayaran tersebut.
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-cyan-500 text-white font-semibold text-sm leading-tight rounded-md hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out"
                >
                  Daftar
                </button>
              </form>
            </div>
          </div>
        </div>
        <br />
      </section>
    </>
  );
};

export default FormDaftar;
