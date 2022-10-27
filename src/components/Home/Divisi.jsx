import React from "react";
import Image1 from "../../assets/image/logo-audit.png";
import Image2 from "../../assets/image/divisi-ussi.png";

const Divisi = () => {
  return (
    <>
      <section className="py-36 mt-36 bg-slate-100">
        <div className="container text-slate-800 text-center">
          <div className="grid lg:gap-x-12 lg:grid-cols-2">
            <div className="mb-24 lg:mb-0">
              <div className="rounded-lg shadow-lg h-full block bg-white">
                <div className="flex justify-center">
                  <div className="p-8 bg-white rounded-full shadow-lg inline-block -mt-16">
                    <img src={Image1} alt="USSI Institute" className="w-20" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-cyan-500 mb-5">USSI Institute</h3>
                  <p className="text-slate-500 text-base mb-0">Divisi</p>
                  <h4 className="text-lg font-medium mb-4">Pelatihan dan Sertifikasi</h4>
                </div>
              </div>
            </div>

            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="p-8 bg-white rounded-full shadow-lg inline-block -mt-16">
                  <img src={Image2} alt="Audit Kepatuhan TI" className="w-20" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-500 mb-5">Audit Kepatuhan TI</h3>
                <p className="text-slate-500 text-base mb-0">Divisi</p>
                <h4 className="text-lg font-medium mb-4">Audit Kepatuhan Teknologi Informasi</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Divisi;
