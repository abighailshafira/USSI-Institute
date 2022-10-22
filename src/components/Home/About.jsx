import React from "react";
import Image1 from "../../assets/image/image2.jpg";
import Image2 from "../../assets/image/image3.jpg";

const About = () => {
  return (
    <>
      <section className="pt-36">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-semibold text-lg text-cyan-500">Tentang UI</h2>
            <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">USSI Institute Divisi Pelatihan dan Sertifikasi</h1>
            <p className="text-lg text-slate-500 text-justify">
              USSI INSTITUTE merupakan sebuah divisi yang berada di bawah naungan PT. USSI Pinbuk Prima Software yang bergerak dalam bidang teknologi informasi. Divisi USSI INSTITUTE lebih berfokus pada pelatihan dan peningkatan kompetensi
              SDM baik internal maupun eksternal. Dengan mengadakan pelatihan dan sertifikasi yang diselenggarakan secara berkelanjutan untuk menunjang operasional pada perusahaan customer juga untuk meningkatkan kompetensi SDM.
            </p>
          </div>

          <div className="text-slate-800 text-center md:text-left px-4">
            <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
              <div className="mb-6 md:mb-0">
                <div className="relative overflow-hidden shadow-lg rounded-md">
                  <img src={Image1} className="w-full" alt="USSI" />
                  <a href="#">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{
                        backgroundColor: `rgba(251, 251, 251, 0.2)`,
                      }}
                    ></div>
                  </a>
                </div>
              </div>

              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-3">Tujuan Kami</h3>

                <p className="text-slate-500">
                  Tujuan yang kami harapkan setelah mengikuti pendidikan dan pelatihan yang diselenggarakan USSI INSTITUTE adalah untuk membangun sistem pelayanan prima, dengan memberikan layanan cepat, tepat, skala prioritas dan waktu
                  tanggap yang sesuai mutu internasional.
                </p>
              </div>
            </div>
          </div>

          <div className="text-slate-800 text-center md:text-right px-4">
            <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center">
              <div className="mb-6 md:mb-0 md:order-2">
                <div className="relative overflow-hidden shadow-lg rounded-md">
                  <img src={Image2} className="w-full" alt="USSI" />
                  <a href="#">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                      style={{
                        backgroundColor: `rgba(251, 251, 251, 0.2)`,
                      }}
                    ></div>
                  </a>
                </div>
              </div>

              <div className="mb-6 md:mb-0 md:order-1">
                <h3 className="text-2xl font-bold mb-3">Komitmen Kami</h3>

                <p className="text-slate-500">
                  Kami selaku vendor penyedia jasa corebanking system teknologi informasi memiliki komitmen untuk menciptakan sumberdaya yang handal, profesional, memiliki integritas, loyalitas dan jiwa kepemimpinan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
