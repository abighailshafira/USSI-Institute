import React from "react";
import "../App.css";
import Image1 from "../assets/image/logo-audit.png";
import Image2 from "../assets/image/logo-ussi.png";

const Divisi = () => {
  return (
    <>
      <section className="mt-36 py-36 bg-slate-100">
        <div class="container px-6 mx-auto">
          <div class=" text-gray-800 text-center">
            <div class="grid lg:gap-x-12 lg:grid-cols-2">
              <div class="mb-12 lg:mb-0">
                <div class="rounded-lg shadow-lg h-full block bg-white">
                  <div class="flex justify-center">
                    <div class="p-6 bg-white rounded-full shadow-lg inline-block -mt-12">
                      <img src={Image1} alt="" class="w-20 h-20" />
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-2xl font-bold text-cyan-500 mb-4">USSI Institute</h3>
                    <h5 class="text-lg font-medium">Divisi</h5>
                    <p class="text-gray-500">Pelatihan dan Sertifikasi</p>
                  </div>
                </div>
              </div>

              <div class="mb-12 lg:mb-0">
                <div class="rounded-lg shadow-lg h-full block bg-white">
                  <div class="flex justify-center">
                    <div class="p-6 bg-cyan-500 rounded-full shadow-lg inline-block -mt-12">
                      <img src={Image2} alt="" class="w-20 h-20" />
                    </div>
                  </div>
                  <div class="p-6">
                    <h3 class="text-2xl font-bold text-cyan-500 mb-4">Audit Kepatuhan TI</h3>
                    <h5 class="text-lg font-medium">Divisi</h5>
                    <p class="text-gray-500">Audit Kepatuhan Teknologi Informasi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Divisi;
