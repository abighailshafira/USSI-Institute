import React from "react";
import Staff from "../assets/image/staff.png"
import Staff2 from "../assets/image/staff2.png"
import Done from "../assets/image/done.png"

const Info = () => {
  return (
    <>
      <section className="mt-36 bg-slate-100 p-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="flex flex-wrap justify-center items-center">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="">
                  <img
                    src={Staff}
                    alt=""
                    width="120px"
                    className="mx-auto"
                  />
                  <div className="text-center">
                    <p className="text-base text-slate-500">100</p>
                    <h3 className="text-lg font-semibold">Our Staff</h3>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="">
                  <img
                    src={Staff2}
                    alt=""
                    width="120px"
                    className="mx-auto"
                  />
                  <div className="text-center">
                    <p className="text-base text-slate-500">200</p>
                    <h3 className="text-lg font-semibold">Our Clients</h3>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="">
                  <img
                    src={Done}
                    alt=""
                    width="120px"
                    className="mx-auto"
                  />
                  <div className="text-center">
                    <p className="text-base text-slate-500">300</p>
                    <h3 className="text-lg font-semibold">Completed Projects</h3>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="">
                  <img
                    src="./dist/img/ongoing.png"
                    alt=""
                    width="120px"
                    className="mx-auto"
                  />
                  <div className="text-center">
                    <p className="text-base text-slate-500">400</p>
                    <h3 className="text-lg font-semibold">Running Projects</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- <div className="mx-auto text-center">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center p-10">
              <div className="max-w-[120px] bg-cyan-500 p-10 lg:mx-6 xl:mx-8">
                <img src="./dist/img/staff.png" alt="" width="120px" />
                <h2 className="font-bold mt-5 text-2xl mb-4 sm:text-4xl lg:text-5xl">100</h2>
                <h2 className="mt-5">Our Staff</h2>
              </div>
              <div className="max-w-[120px] bg-cyan-500 p-10 lg:mx-6 xl:mx-8">
                <img src="./dist/img/staff2.png" alt="" width="120px" />
                <h2 className="font-bold mt-5 text-2xl mb-4 sm:text-4xl lg:text-5xl">200</h2>
                <h2 className="mt-5">Our Clients</h2>
              </div>
              <div className="max-w-[120px] bg-cyan-500 p-10 lg:mx-6 xl:mx-8">
                <img src="./dist/img/done.png" alt="" width="120px" />
                <h2 className="font-bold mt-5 text-2xl mb-4 sm:text-4xl lg:text-5xl">300</h2>
                <h2 className="mt-5">Completed Projects</h2>
              </div>
              <div className="max-w-[120px] bg-cyan-500 p-10 lg:mx-6 xl:mx-8">
                <img src="./dist/img/ongoing.png" alt="" width="120px" />
                <h2 className="font-bold mt-5 text-2xl mb-4 sm:text-4xl lg:text-5xl">400</h2>
                <h2 className="mt-5">Running Projects</h2>
              </div>
            </div>
          </div>
        </div> --> */}
        </div>
      </section>
    </>
  );
};

export default Info;
