import React from "react";
import Image from "../../assets/image/ussi.jpg";

const Profile = () => {
  return (
    <>
      <section className="md:mt-10 lg:mt-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="svg absolute hidden md:block" style={{ height: `560px`, width: `100%`, zIndex: `-10`, overflow: `hidden` }}>
          <path
            fill="#f1f5f9"
            fill-opacity="1"
            d="M0,256L48,256C96,256,192,256,288,234.7C384,213,480,171,576,133.3C672,96,768,64,864,69.3C960,75,1056,117,1152,122.7C1248,128,1344,96,1392,80L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <div className="container pt-36 md:pt-24 lg:pb-12">
          <div className="text-slate-800 px-4">
            <div className="grid lg:grid-cols-2 gap-x-6 xl:gap-x-12 mb-16">
              <div className="mb-6 lg:mb-0">
                <div className="group relative overflow-hidden shadow-lg rounded-md aspect-[4/3] hover:scale-95 transition-all duration-500">
                  <img src={Image} className="w-full h-full bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500 group-hover:rotate-12" alt="USSI" />
                  <a href="#">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{ backgroundColor: `rgba(251, 251, 251, 0.2)` }}
                    ></div>
                  </a>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-lg text-cyan-500 mb-0">Profil</h2>
                <h1 className="text-3xl font-bold mb-6 uppercase text-slate-800">USSI Institute</h1>
                <p className="text-base text-slate-500 text-justify">
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
