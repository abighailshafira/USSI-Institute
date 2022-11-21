import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_6t70fcj", "template_i1b6rak", form.current, "-hablRCXNYLfvdviu").then(
      (result) => {
        console.log(result.text);
        console.log("message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <section id="contact" className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h2 className="font-semibold text-lg text-cyan-500 mb-0">Kontak</h2>
              <h1 className="text-3xl font-bold mb-2 text-slate-800">Hubungi Kami</h1>
              <p className="text-base text-slate-500">Mari bergabung dan mengikuti pelatihan yang kami selenggarakan untuk membangun sumber daya manusia yang handal.</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mx-auto rounded-lg shadow-lg bg-white overflow-hidden max-w-4xl">
            <div className="w-full p-7 md:w-1/2 md:p-10">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-2 gap-2 md:gap-4 text-slate-800">
                  <div className="form-group text-base">
                    <label for="name">Nama</label>
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      id="name"
                      name="name"
                      placeholder="Nama"
                      required
                    />
                  </div>

                  <div className="form-group text-base mb-4">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="text-base mb-4">
                  <label for="subject">Subjek</label>
                  <input
                    type="text"
                    className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    id="subject"
                    name="subject"
                    placeholder="Subjek"
                    required
                  />
                </div>

                <div className="text-base mb-4">
                  <label for="message">Pesan</label>
                  <textarea
                    type="text"
                    className="h-32 form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    id="message"
                    name="message"
                    placeholder="Pesan"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-medium text-base tracking-wide leading-snug rounded-md hover:shadow-lg transition duration-300 ease-in-out">
                  Kirim Pesan
                </button>
              </form>
            </div>

            <div className="w-full md:w-1/2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.605228444797!2d107.66938051455905!3d-6.9376945949875015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c2a7b5cda115%3A0x6158ba9a35b7790c!2sUSSI%20Pinbuk%20Prima%20Software%20PT!5e0!3m2!1sen!2sid!4v1665975453920!5m2!1sen!2sid"
                style={{
                  border: 0,
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
