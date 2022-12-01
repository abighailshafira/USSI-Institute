import React from "react";
import { Link } from "react-router-dom";

const Pelatihan = ({ pelatihan }) => {
  const options = {
    // weekday: "short",
    // year: "numeric",
    month: "long",
    // day: "numeric",
  };

  return (
    <>
      <section className="pt-10" id="JadwalPelatihan">
        <div className="container pt-24 md:pt-24 lg:pb-12">
          <div className="w-full">
            <div className="mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">Jadwal Pelatihan</h1>
              <p className="text-base text-slate-500">Jadwal Rencana Pelatihan Tahun 2022</p>
            </div>

            <div className="flex flex-wrap justify-center">
              {pelatihan?.map((item) => {
                const day1 = new Date(item.startDate).toLocaleDateString("en-GB", options);

                return (
                  <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                    <div className="bg-white rounded-md shadow-lg overflow-hidden mb-5 md:mb-10">
                      <img src="https://source.unsplash.com/360x200?programming" alt="Pelatihan" className="w-full" />
                      <div className="p-8 text-center">
                        <h3 className="text-lg font-semibold truncate mb-0">{item.trainingName}</h3>
                        <p className="text-base text-slate-500 mb-7">Pelatihan {day1}</p>
                        <Link to={`/detail-pelatihan/${item.id}`}>
                          <a className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md shadow-md hover:bg-cyan-600 hover:text-white duration-300 transition">Selengkapnya</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pelatihan;
