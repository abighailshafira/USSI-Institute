import React from "react";
import Image from "../../assets/image/login.png";

const FormLogin = () => {
  return (
    <>
      <section class="pt-36">
        <div class="container">
          <div class="flex flex-wrap items-center justify-center mx-auto rounded-lg shadow-xl bg-white overflow-hidden max-w-4xl">
            <div class="w-full md:w-1/2">
              <img src={Image} class="w-full" alt="Phone image" />
            </div>

            <div class="w-full md:w-1/2 p-10">
              <form>
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

                <div class="flex justify-between items-center mb-6">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-cyan-600 checked:border-cyan-500 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                      id="exampleCheck3"
                      checked
                    />
                    <label class="form-check-label inline-block text-slate-500" for="exampleCheck2">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" class="text-cyan-500 hover:text-cyan-600 focus:text-cyan-700 active:text-cyan-600 duration-200 transition ease-in-out">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  class="inline-block px-7 py-3 bg-cyan-500 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-800 hover:shadow-lg focus:bg-cyan-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Login
                </button>

                <p class="mt-3 text-slate-500">
                  Belum punya akun?{" "}
                  <a href="register.html" class="text-cyan-500">
                    Register disini
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

export default FormLogin;
