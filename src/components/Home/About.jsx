import React from "react";
import Image1 from "../../assets/image/image2.jpg";
import Image2 from "../../assets/image/image3.jpg";

const About = () => {
  return (
    <>
      <section id="about" className="pt-14 md:pt-24">
        <div className="container">
          <div className="mb-16">
            <h2 className="font-semibold text-lg text-cyan-500">Tentang UI</h2>
            <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">USSI Institute Divisi Pelatihan dan Sertifikasi</h1>
            <p className="text-base md:text-lg text-slate-500 text-justify">
              USSI INSTITUTE merupakan sebuah divisi yang berada di bawah naungan{" "}
              <a className="text-cyan-500 hover:text-sky-600" href="https://ussi-software.com/" target="_blank">
                PT. USSI Pinbuk Prima Software
              </a>{" "}
              yang bergerak dalam bidang teknologi informasi. Divisi USSI INSTITUTE lebih berfokus pada pelatihan dan peningkatan kompetensi SDM baik internal maupun eksternal. Dengan mengadakan pelatihan dan sertifikasi yang
              diselenggarakan secara berkelanjutan untuk menunjang operasional pada perusahaan customer juga untuk meningkatkan kompetensi SDM.
            </p>
          </div>

          <div className="text-slate-800 text-center md:text-left px-4">
            <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center mb-12">
              <div className="mb-6 md:mb-0">
                <div className="group relative overflow-hidden shadow-lg rounded-md aspect-[4/3] hover:scale-95 transition-all duration-500">
                  <img src={Image1} className="w-full h-full bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500 group-hover:rotate-12" alt="USSI" />
                  <a href="#">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                      style={{
                        backgroundColor: `rgba(251, 251, 251, 0.2)`,
                      }}
                    ></div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Tujuan Kami</h3>
                <p className="text-slate-500 text-base">
                  Tujuan yang kami harapkan setelah mengikuti pendidikan dan pelatihan yang diselenggarakan USSI INSTITUTE adalah untuk <b>membangun sistem pelayanan prima</b>, dengan memberikan layanan cepat, tepat, skala prioritas dan
                  waktu tanggap yang sesuai mutu internasional.
                </p>
              </div>
            </div>
          </div>

          <div className="text-slate-800 text-center md:text-right px-4">
            <div className="grid md:grid-cols-2 gap-x-6 xl:gap-x-12 items-center">
              <div className="mb-6 md:mb-0 md:order-2">
                <div className="group relative overflow-hidden shadow-lg rounded-md aspect-[4/3] hover:scale-95 transition-all duration-500">
                  <img src={Image2} className="w-full h-full bg-cover bg-center absolute group-hover:scale-125 transition-all duration-500 group-hover:rotate-12" alt="USSI" />
                  <a href="#">
                    <div
                      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full"
                      style={{
                        backgroundColor: `rgba(251, 251, 251, 0.2)`,
                      }}
                    ></div>
                  </a>
                </div>
              </div>

              <div className="md:order-1">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Komitmen Kami</h3>
                <p className="text-slate-500 text-base">
                  Kami selaku vendor penyedia jasa corebanking system teknologi informasi memiliki komitmen untuk <b>menciptakan sumberdaya</b> yang handal, profesional, memiliki integritas, loyalitas dan jiwa kepemimpinan.
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
