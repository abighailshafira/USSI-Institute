import React from "react";
import CountUp from "react-countup";

const Info = () => {
  return (
    <>
      <section className="mt-24 bg-slate-100 p-24 ">
        <div className="container text-slate-800 text-center">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-0 items-center">
            <div class="mb-12 lg:mb-0 relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-cyan-500 mx-auto mb-6">
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clip-rule="evenodd"
                />
              </svg>

              <h5 class="text-5xl font-medium text-cyan-500 mb-4">
                <CountUp start={0} end={100} duration={2} />
              </h5>
              <h6 class="text-base text-slate-800">Our Staffs</h6>
            </div>

            <div class="mb-12 lg:mb-0 relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-cyan-500 mx-auto mb-6">
                <path
                  fill-rule="evenodd"
                  d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                  clip-rule="evenodd"
                />
                <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
              </svg>

              <h5 class="text-5xl font-medium text-cyan-500 mb-4">
                <CountUp start={0} end={200} duration={2} />
              </h5>
              <h6 class="text-base text-slate-800">Our Clients</h6>
            </div>

            <div class="mb-12 md:mb-0 relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-cyan-500 mx-auto mb-6">
                <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
              </svg>

              <h5 class="text-5xl font-medium text-cyan-500 mb-4">
                <CountUp start={0} end={300} duration={2} />
              </h5>
              <h6 class="text-base text-slate-800">Completed Projects</h6>
            </div>

            <div class="relative">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 text-cyan-500 mx-auto mb-6">
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                  clip-rule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
              </svg>

              <h5 class="text-5xl font-medium text-cyan-500 mb-4">
                <CountUp start={0} end={400} duration={2} />
              </h5>
              <h6 class="text-base text-slate-800 mb-0">Running Projects</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
