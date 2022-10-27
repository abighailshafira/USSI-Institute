import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/image/login.png";
import { setData } from "../../redux/slices/authSlice";

const FormLogin = () => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  // const isLoggedIn = jsCookie.get('auth')
  const isLoggedIn = !!useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = new URLSearchParams();
    userData.append("username", username);
    userData.append("password", password);
    axios({
      method: "post",
      url: `http://localhost:8080/api/users/login`,
      data: userData,
    })
      .then((res) => {
        if (res.status === 200) {
          dispatch(
            setData({
              token: res.data,
            })
          );

          navigate("/");
          message.success("This is a success message");
          // setTimeout(window.location.reload.bind(window.location), 300);
          // toastMixin.fire({
          //   animation: true,
          //   title: "Signed in Successfully",
          // });
        }
      })
      .catch((err) => {
        console.log(err);
        message.error("This is an error message");
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
          <div className="max-w-xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold mb-2 text-slate-800">Login</h1>
            <p className="text-base text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center mx-auto rounded-lg shadow-lg bg-white max-w-4xl">
            <div className="w-full md:w-1/2">
              <img src={Image} className="w-full" alt="Login" />
            </div>

            <div className="w-full md:w-1/2 p-10 text-slate-800">
              <form>
                <div className="mb-4">
                  <label for="email" className="text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Email"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <label for="password" className="text-base">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="flex justify-between items-center mb-5">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top float-left mr-2 cursor-pointer"
                      id="flexCheckChecked"
                      value=""
                      checked
                    />
                    <label
                      className="form-check-label inline-block text-slate-500"
                      for="flexCheckChecked"
                    >
                      Remember me
                    </label>
                  </div>

                  <a href="#" className="text-cyan-500">
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-2.5 text-white font-medium text-base tracking-wide leading-snug rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out"
                >
                  Login
                </button>

                <p className="mt-2 text-slate-500 text-center">
                  Belum punya akun?{" "}
                  <Link to="/register">
                    <a className="text-cyan-500 font-semibold">
                      Register disini
                    </a>
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

export default FormLogin;
