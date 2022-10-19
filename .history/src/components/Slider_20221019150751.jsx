import React from "react";

const Slider = () => {
  return (
    <>
      <section>
        <div
          class="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: "50%",
            backgroundImage: `url('https://mdbootstrap.com/img/new/textures/full/142.jpg')`,
            height: "500px",
          }}
        ></div>

        <div class="container mx-auto px-6 md:px-12 xl:px-32">
          <div class="text-center text-slate-900">
            <div
              class="block rounded-lg shadow-lg px-6 py-8 md:py-16 md:px-12"
              style={{
                marginTop: "-170px",
                background: `hsla(0, 0%, 100%, 0.7)`,
                backdropFilter: `blur(30px)`,
              }}
            >
              <h1 class="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-6 md:mb-8">
                Selamat Datang di Website
                <br />
                <span class="text-cyan-500">USSI INSTITUTE</span>
              </h1>
              <a
                href="#"
                class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-semibold text-sm rounded-md shadow-md hover:bg-gradient-to-l hover:from-cyan-500 hover:to-sky-600"
              >
                Selanjutnya
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
