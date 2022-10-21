import React from "react";

const Gallery = () => {
  return (
    <>
      <section className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-16">
              <h1 className="text-3xl font-bold mb-2 uppercase text-slate-800">
                Gallery
              </h1>
              <h2 className="text-base text-slate-500">
                Kegiatan Pelatihan UI Tahun 2022
              </h2>
            </div>

            <div className="flex flex-wrap justify-center">
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <video className="w-full" autoplay loop muted playsinline>
                    <source src="dist/video/video1.mp4" type="video/mp4" />
                  </video>
                  <div className="py-6 text-center">
                    <h3 className="text-lg font-semibold truncate mb-2">
                      Pelatihan dan Trial Obox OJK
                    </h3>
                    <p className="text-base text-slate-500">18 - 19 Januari 2022</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <video className="w-full" autoplay loop muted playsinline>
                    <source src="dist/video/video2.mp4" type="video/mp4" />
                  </video>
                  <div className="py-6 text-center">
                    <h3 className="text-lg font-semibold truncate mb-2">
                      Pelatihan Audit TI
                    </h3>
                    <p className="text-base text-slate-500">
                      16 - 17 Februari 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <img
                    src="https://source.unsplash.com/360x200?programming"
                    alt="Pelatihan dan Trial Error Obox OJK II"
                    className="w-full"
                  />
                  <div className="py-6 text-center">
                    <h3 className="text-lg font-semibold truncate mb-2">
                      Pelatihan dan Trial Error Obox OJK II
                    </h3>
                    <p className="text-base text-slate-500">18 - 19 Maret 2022</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-md shadow-lg overflow-hidden mb-10">
                  <video className="w-full" autoplay loop muted playsinline>
                    <source src="dist/video/video4.mp4" type="video/mp4" />
                  </video>
                  <div className="py-6 text-center">
                    <h3 className="text-lg font-semibold truncate mb-2">
                      Pelatihan SDM IT
                    </h3>
                    <p className="text-base text-slate-500">27 - 28 Juni 2022</p>
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

export default Gallery;
