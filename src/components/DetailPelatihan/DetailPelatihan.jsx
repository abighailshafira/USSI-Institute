import React from "react";
import { Link } from "react-router-dom";

const DetailPelatihan = () => {
  return (
    <>
      <section id="detail-pelatihan" className="pt-36">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 mb-10 md:w-1/2">
              <div>
                <h1 className="text-4xl font-bold mb-10 text-slate-800 flex items-center ">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes" className="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                    ></path>
                  </svg>
                  USSI Institute
                </h1>
                <h2 className="text-lg font-bold text-slate-800 mb-1">Web Design</h2>
                <p className="text-base text-slate-500 mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, praesentium facilis corporis eius aspernatur necessitatibus voluptatibus debitis veniam consequuntur. Ducimus magnam libero, vitae culpa a modi neque
                  assumenda ea aliquam repellendus esse doloribus. Deserunt cumque enim odio? Harum consectetur error nisi doloribus possimus illo impedit earum cumque nesciunt sapiente, libero corrupti tenetur. Facere ad sapiente sunt!
                  Nemo facere maiores mollitia!
                </p>
              </div>
              <p className="text-slate-500 py-2 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-slate-800">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                  />
                </svg>
                19 Oktober 2022
              </p>
              <div>
                <h2 className="text-2xl font-semibold text-slate-800 mt-5 py-6">Ready to Participate?</h2>
                <Link to="/pendaftaran">
                  <a className="text-sm font-semibold text-white bg-cyan-500 py-3 px-8 rounded-md">Daftar Sekarang</a>
                </Link>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 ">
                  <img src="https://source.unsplash.com/360x200?programming" alt="Pelatihan" className="w-full rounded-lg" />
                </div>
                <div className=" ">
                  <img src="https://source.unsplash.com/360x200?programming" alt="Pelatihan" className="w-full rounded-lg" />
                </div>
                <div className=" ">
                  <img src="https://source.unsplash.com/360x200?programming" alt="Pelatihan" className="w-full rounded-lg" />
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
