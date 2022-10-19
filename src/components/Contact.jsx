import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact" class="pb-24 pt-36">
        <div class="container">
          <div class="w-full px-4">
            <div class="max-w-xl mx-auto text-center mb-10">
              <h2 class="font-semibold text-lg text-cyan-500">Kontak</h2>
              <h1 class="text-3xl font-bold mb-2">Hubungi Kami</h1>
              <p class="text-base text-slate-500">
                Mari bergabung dan mengikuti pelatihan yang kami selenggarakan
                untuk membangun sumber daya manusia yang handal.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap justify-center mx-auto rounded-lg shadow-xl bg-white overflow-hidden max-w-4xl">
            <div class="w-full p-7 md:w-1/2 md:p-10">
              <form>
                <div class="grid grid-cols-2 gap-2 md:gap-4">
                  <div class="form-group">
                    <label for="name" class="text-base">
                      Nama
                    </label>
                    <input
                      type="text"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      id="name"
                      placeholder="Nama"
                    />
                  </div>
                  <div class="form-group mb-4">
                    <label for="email" class="text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div class="form-group mb-4">
                  <label for="subject" class="text-base">
                    Subjek
                  </label>
                  <input
                    type="text"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    id="subject"
                    placeholder="Subjek"
                  />
                </div>
                <div class="form-group mb-4">
                  <label for="message" class="text-base">
                    Pesan
                  </label>
                  <textarea
                    type="text"
                    class="h-32 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    id="message"
                    placeholder="Pesan"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full px-6 py-2.5 bg-cyan-500 text-white font-semibold text-sm leading-tight rounded-md hover:opacity-80 hover:shadow-lg transition duration-300 ease-in-out"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            <div class="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.605228444797!2d107.66938051455905!3d-6.9376945949875015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2a7b5cda115%3A0x6158ba9a35b7790c!2sUSSI%20Pinbuk%20Prima%20Software%20PT!5e0!3m2!1sen!2sid!4v1665975453920!5m2!1sen!2sid"
                style={{
                    border: 0
                }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
