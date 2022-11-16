import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Image from "../../assets/image/icon-ussi.ico";
import { BsCalendarRange } from "react-icons/bs";
import { RiTimeLine, RiUserLocationLine } from "react-icons/ri";
import axios from "axios";

const DetailPelatihan = () => {
  const { id } = useParams();

  useEffect(() => {
    getDetailPelatihan();
  }, []);

  // const getDetailPelatihan = async () => {
  //   await axios
  //     .get(`http://localhost:5000/api/v1/detail/training/${id}`, {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${auth.token}`,
  //       },
  //     })
  //     .then(function (res) {
  //       const getData = res.data.data[0];
        
  //     })
  //     .catch((err) => {
  //       // Jika Gagal
  //     });
  // };
  
  return (
    <>
      <section id="detail-pelatihan" className="pt-36 pb-10 md:pb-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 mb-10 md:w-1/2">
              <div>
                <h1 className="text-4xl font-bold mb-10 text-slate-800 flex items-center justify-center md:justify-start">
                  <img src={Image} alt="USSI" className="w-10 mr-2 " />
                  USSI Institute
                </h1>
                <h2 className="text-xl font-bold text-slate-800 mb-3">
                  Web Design
                </h2>
                <p className="text-base text-slate-500 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sequi, praesentium facilis corporis eius aspernatur
                  necessitatibus voluptatibus debitis veniam consequuntur.
                  Ducimus magnam libero, vitae culpa a modi neque assumenda ea
                  aliquam repellendus esse doloribus. Deserunt cumque enim odio?
                  Harum consectetur error nisi doloribus possimus illo impedit
                  earum cumque nesciunt sapiente, libero corrupti tenetur.
                  Facere ad sapiente sunt! Nemo facere maiores mollitia!
                </p>

                <p className="text-slate-800 flex items-center text-sm font-medium">
                  <BsCalendarRange className="w-4 h-4 text-cyan-500 mr-2" />
                  Senin, 19 Oktober 2022
                </p>
                <p className="text-slate-800 flex items-center text-sm font-medium">
                  <RiTimeLine className="w-4 h-4 text-cyan-500 mr-2" />
                  10.00 WIB
                </p>
                <p className="text-slate-800 flex items-center text-sm font-medium">
                  <RiUserLocationLine className="w-4 h-4 text-cyan-500 mr-2" />
                  Hotel Grand Cordella, Bandung
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl text-slate-800 mt-5 md:py-5 py-3">
                  Ready to Participate?
                </h2>
                <Link to="/pendaftaran">
                  <a className="text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 md:py-3 md:px-8 py-2 px-6 rounded-md hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out">
                    Daftar Sekarang
                  </a>
                </Link>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 md:pt-24 lg:pt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 ">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out"
                  />
                </div>
                <div>
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan"
                    className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailPelatihan;
