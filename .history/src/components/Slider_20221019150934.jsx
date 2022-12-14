import React from "react";

const Slider = () => {
  return (
    <>
      <section>
        <div className="flex">
          <div className="w-2/12 flex items-center">
            <div className="w-full text-right">
              <button className="p-3 rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-full h-96 border">slider</div>
          <div className="w-2/12 flex items-center">
            {/* <div className="w-full">
          <button className="p-3 rounded-full bg-white">
            <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
