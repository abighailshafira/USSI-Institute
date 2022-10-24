import React from "react";
import Image from "../../assets/image/ussi.jpg";

const Profile = () => {
  return (
    <>
      <section className="mt-20">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="svg absolute hidden lg:block" style={{ height: `560px`, width: `100%`, zIndex: `-10`, overflow: `hidden` }}>
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
              <stop stop-color="hsl(217,88%, 93%)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
          ></path>
        </svg>
        <div className="container pt-24">
          <div className="text-slate-800 px-4">
            <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 mb-16">
              <div className="mb-6 md:mb-0">
                <div className="relative overflow-hidden shadow-lg rounded-md">
                  <img src={Image} className="w-full" alt="USSI" />
                  <a href="#">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
                    ></div>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-lg text-cyan-500">Profil</h2>
                <h1 className="text-3xl font-bold mb-6 uppercase text-slate-800">USSI Institute</h1>
                <p className="text-base text-slate-500">
                  USSI INSTITUTE merupakan sebuah divisi yang berada di bawah naungan PT. USSI Pinbuk Prima Software yang bergerak dalam bidang teknologi informasi. Divisi USSI INSTITUTE lebih berfokus pada pelatihan dan peningkatan
                  kompetensi SDM baik internal maupun eksternal. Dengan mengadakan pelatihan dan sertifikasi yang diselenggarakan secara berkelanjutan untuk menunjang operasional pada perusahaan customer juga untuk meningkatkan kompetensi
                  SDM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
