import React from "react";
import Image from "../../assets/image/register.png";
import { Link } from "react-router-dom";

import { FiEye, FiEyeOff } from "react-icons/fi";

const FormRegister = () => {
  return (
    <>
      {" "}
      <section className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h1 className="text-3xl font-bold mb-2">Register</h1>
              <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center mx-auto rounded-lg shadow-xl bg-white overflow-hidden max-w-4xl">
            <div className="w-full md:w-1/2">
              <img src={Image} className="w-full" alt="Phone image" />
            </div>

            <div className="w-full md:w-1/2 p-10">
              <form>
                <div className="form-group mb-4">
                  <label for="name" className="text-base">
                    Nama Lengkap
                  </label>
                  <input
                    type="name"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Nama Lengkap"
                  />
                </div>

                <div className="form-group mb-4">
                  <label for="email" className="text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group mb-4">
                  <label for="password" className="text-base">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Password"
                  />
                  <FiEye
                  // onClick={() => setShowPassword(true)}
                  // className={`${showPassword ? "hidden" : ""} absolute right-3 top-2.5`}
                  />
                  <FiEyeOff
                  // onClick={() => setShowPassword(false)}
                  // className={`${showPassword ? "" : "hidden"} absolute right-3 top-2.5`}
                  />
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-gradient-to-r from-cyan-500 to-sky-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-cyan-800 hover:shadow-lg focus:bg-cyan-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Register
                </button>

                <p className="mt-3 text-slate-500 text-center">
                  Sudah punya akun?{" "}
                  <Link to="/login">
                    <a className="text-cyan-500">Login disini</a>
                  </Link>
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
