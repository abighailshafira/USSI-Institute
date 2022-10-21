import React from "react";
import Image from "../../assets/image/ussi.jpg";

const Profile = () => {
  return (
    <>
      <section className="pt-36">
        <div className="container">
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
