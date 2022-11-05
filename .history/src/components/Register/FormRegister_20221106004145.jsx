import React, { useState } from "react";
import Image from "../../assets/image/register.png";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../PasswordInput";
import axios from "axios";
import { message } from "antd";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const register = async (e) => {
    e.preventDefault();
    const userData = new URLSearchParams();
    userData.append("email", email);
    userData.append("password", password);
    axios({
      method: "post",
      url: `http://localhost:5000/api/v1/register`,
      data: userData,
    })
      .then((res) => {
        // console.log(res.data);
        navigate("/login");
        message.success("Register Berhasil.");
        // if (res.data.statusCode === 200) {
        //   dispatch(
        //     setData({
        //       accessToken: res.data.accessToken,
        //     })
        //   );

        //   setTimeout(window.location.reload.bind(window.location), 300);
        // toastMixin.fire({
        //   animation: true,
        //   title: "Signed in Successfully",
        // });
        // } else {
        // }
      })
      .catch((err) => {
        console.log(err);
        message.error("Silahkan Cek Email dan Password Anda.");
        // message.error("This is an error message");
        // toastMixin.fire({
        //   icon: "error",
        //   animation: true,
        //   title: "Not match!",
        // });
      });
  };

  return (
    <>
      <section className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h1 className="text-3xl font-bold mb-2 text-slate-800">
                Register
              </h1>
              <p className="text-base text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center mx-auto rounded-lg shadow-xl bg-white max-w-4xl">
            <div className="w-full md:w-1/2">
              <img src={Image} className="w-full" alt="Register" />
            </div>

            <div className="w-full md:w-1/2 p-10 text-slate-800">
              <form>
                {/* <div className="mb-4">
                  <label for="name" className="text-base">
                    Nama Lengkap
                  </label>
                  <input
                    type="name"
                    className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Nama Lengkap"
                  />
                </div> */}

                <div className="mb-4">
                  <label for="email" className="text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label for="password" className="text-base">
                    Password
                  </label>

                  <PasswordInput
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 text-white font-medium text-base tracking-wide leading-snug rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out"
                >
                  Register
                </button>

                <p className="mt-2 text-slate-500 text-center">
                  Sudah punya akun?{" "}
                  <Link to="/login">
                    <a className="text-cyan-500 font-semibold">Login disini</a>
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
