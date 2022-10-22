import React from "react";
import { Link } from "react-router-dom";

const Pelatihan = ({ data }) => {
  console.log(data);
  return (
    <>
      <section className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">
                Jadwal Pelatihan
              </h1>
              <h2 className="text-base text-slate-500">
                Jadwal Rencana Pelatihan Tahun 2022
              </h2>
            </div>

            <div className="flex flex-wrap justify-center">
              {data?.map((item) => (
                <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                  <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                    <img
                      src="https://source.unsplash.com/360x200?programming"
                      alt="Pelatihan"
                      className="w-full"
                    />
                    <div className="py-8 text-center">
                      <h3 className="text-lg font-semibold truncate">
                        {item.training_name}
                      </h3>
                      <p className="text-base text-slate-500 mb-7">
                        {item.category}
                      </p>
                      <Link to="/detail-pelatihan">
                        <a className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                          Selengkapnya
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan Februari
                    </h3>
                    <p className="text-base text-slate-500 mb-7">Web Development</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan Maret
                    </h3>
                    <p className="text-base text-slate-500 mb-7">App Design</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan April
                    </h3>
                    <p className="text-base text-slate-500 mb-7">App Development</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan Mei
                    </h3>
                    <p className="text-base text-slate-500 mb-7">Web Design</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan Juni
                    </h3>
                    <p className="text-base text-slate-500 mb-7">Web Development</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan Juli
                    </h3>
                    <p className="text-base text-slate-500 mb-7">App Design</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan Agustus
                    </h3>
                    <p className="text-base text-slate-500 mb-7">App Development</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan September
                    </h3>
                    <p className="text-base text-slate-500 mb-7">Web Design</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan Oktober
                    </h3>
                    <p className="text-base text-slate-500 mb-7">Web Development</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan November
                    </h3>
                    <p className="text-base text-slate-500 mb-7">App Design</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full"
                  />
                  <div className="py-8 text-center">
                    <h3 className="text-lg font-semibold truncate">
                      Pelatihan Desember
                    </h3>
                    <p className="text-base text-slate-500 mb-7">App Development</p>
                    <a
                      href="./page/detail-pelatihan.html"
                      className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Selengkapnya
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pelatihan;
