import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/image/icon-ussi.ico";

const DetailPelatihan = () => {
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
                <h2 className="text-xl font-bold text-slate-800 mb-3">Web Design</h2>
                <p className="text-base text-slate-500 text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, praesentium facilis corporis eius aspernatur necessitatibus voluptatibus debitis veniam consequuntur. Ducimus magnam libero, vitae culpa a modi neque
                  assumenda ea aliquam repellendus esse doloribus. Deserunt cumque enim odio? Harum consectetur error nisi doloribus possimus illo impedit earum cumque nesciunt sapiente, libero corrupti tenetur. Facere ad sapiente sunt!
                  Nemo facere maiores mollitia!
                </p>
                <p className="text-slate-800 flex items-center text-sm font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-cyan-500 mr-1">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    />
                  </svg>
                  19 Oktober 2022
                </p>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl text-slate-800 mt-5 py-5">Ready to Participate?</h2>
                <Link to="/pendaftaran">
                  <a className="text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-sky-600 py-3 px-8 rounded-md hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out">
                    Daftar Sekarang
                  </a>
                </Link>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 ">
                  <img src="https://source.unsplash.com/360x200?programming" alt="Pelatihan" className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/360x200?programming" alt="Pelatihan" className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out" />
                </div>
                <div>
                  <img src="https://source.unsplash.com/360x200?programming" alt="Pelatihan" className="w-full rounded-lg hover:opacity-80 transition duration-300 ease-in-out" />
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
