import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { RiTimeLine, RiUserLocationLine } from "react-icons/ri";
import { BsCalendarRange } from "react-icons/bs";
import { TbCalendarTime } from "react-icons/tb";
import Image from "../../assets/image/icon-ussi.ico";
import { useSelector } from "react-redux";

const DetailPelatihan = () => {
  const [data, setData] = useState("");
  const { id } = useParams();
  const isLoggedIn = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    getDetailPelatihan();
  }, []);

  // Read Data
  const getDetailPelatihan = async () => {
    await axios
      .get(`http://localhost:5000/api/v1/detail/training/${id}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then(function (res) {
        const getData = res.data.data;
        setData(getData);
        console.log(getData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const startDate = new Date(data.startDate).toLocaleDateString("id", options);
  const endDate = new Date(data.endDate).toLocaleDateString("id", options);
  const registrationDate = new Date(data.registrationDate).toLocaleDateString("id", options);

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
                <h2 className="text-xl font-bold text-slate-800 mb-3">{data.trainingName}</h2>
                <p className="text-base text-slate-500 text-justify">{data.description}</p>

                <p className="text-slate-800 flex items-center text-sm font-medium">
                  <BsCalendarRange className="w-4 h-4 text-cyan-500 mr-2" />
                  {startDate} - {endDate}
                </p>
                <p className="text-slate-800 flex items-center text-sm font-medium">
                  <RiTimeLine className="w-4 h-4 text-cyan-500 mr-2" />
                  {data.time} WIB
                </p>
                <p className="text-slate-800 flex items-center text-sm font-medium">
                  <RiUserLocationLine className="w-4 h-4 text-cyan-500 mr-2" />
                  {data.location}, {data.city}
                </p>
              </div>
              <div className="pt-2 text-base font-semibold">
                Batas Pendaftaran :
                <p className="text-slate-800 flex items-center text-sm font-medium pt-1">
                  <TbCalendarTime className="w-4 h-4 text-cyan-500 mr-2" /> {registrationDate}
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl text-slate-800 mt-5 py-3">Siap untuk Bergabung?</h2>
                {isLoggedIn? (
                  <Link to={`/pendaftaran/${data.id}`}>
                    <a className="text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 md:py-3 md:px-8 py-2 px-6 rounded-md hover:text-white hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out">
                      Daftar Sekarang
                    </a>
                  </Link>

                ):(
                  <Link to="/login">
                    <a className="text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 md:py-3 md:px-8 py-2 px-6 rounded-md hover:text-white hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out">
                      Daftar Sekarang
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 md:pt-24 lg:pt-0">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 ">
                  <img src={data.img} alt="Pelatihan" className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out" />
                </div>
                <div>
                  <img src={data.img} alt="Pelatihan" className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out" />
                </div>
                <div>
                  <img src={data.img} alt="Pelatihan" className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out" />
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
