import React from "react";
import Image from "../../assets/image/register.png";

const FormRegister = () => {
  return (
    <>
      {" "}
      <section class="pt-36">
        <div class="container">
          <div class="flex flex-wrap items-center justify-center mx-auto rounded-lg shadow-xl bg-white overflow-hidden max-w-4xl">
            <div class="w-full md:w-1/2">
              <img src={Image} class="w-full" alt="Phone image" />
            </div>

            <div class="w-full md:w-1/2 p-10">
              <form>
                <div class="form-group mb-4">
                  <label for="name" class="text-base">
                    Nama Lengkap
                  </label>
                  <input
                    type="name"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Nama Lengkap"
                  />
                </div>

                <div class="form-group mb-4">
                  <label for="email" class="text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Email"
                  />
                </div>

                <div class="form-group mb-4">
                  <label for="password" class="text-base">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Password"
                  />
                </div>

                <div class="form-group mb-4">
                  <label for="password" class="text-base">
                    Ulangi Password
                  </label>
                  <input
                    type="password"
                    class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Ulangi Password"
                  />
                </div>

                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-cyan-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-800 hover:shadow-lg focus:bg-cyan-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
                </button>

                <p class="mt-3 text-slate-500">
                  Sudah punya akun?{" "}
                  <a href="login.html" class="text-cyan-500">
                    Login disini
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormRegister;
