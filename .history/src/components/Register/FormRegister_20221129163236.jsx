import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Image from "../../assets/image/register.png";
import { Input, Select } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Swal from "sweetalert2";

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [institutionData, setInstitutionData] = useState([]);
  const [password, setPassword] = useState("");

  console.log(institution);
  const navigate = useNavigate();

  console.log(institutionData);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const register = async (e) => {
    e.preventDefault();
    const userData = new URLSearchParams();
    userData.append("name", name);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("institutionId", institution);

    // axios({
    //   method: "post",
    //   url: `http://localhost:5000/api/v1/register`,
    //   data: userData,
    // })
    //   .then((res) => {
    //     var toastMixin = Swal.mixin({
    //       icon: "success",
    //       title: "Title",
    //       showConfirmButton: false,
    //       timer: 1000,
    //       timerProgressBar: true,
    //       didOpen: (toast) => {
    //         toast.addEventListener("mouseenter", Swal.stopTimer);
    //         toast.addEventListener("mouseleave", Swal.resumeTimer);
    //       },
    //     });
    //     toastMixin.fire({
    //       title: "Register berhasil",
    //     });

    //     navigate("/login");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     var toastMixin = Swal.mixin({
    //       icon: "success",
    //       title: "Title",
    //       showConfirmButton: false,
    //       timer: 1000,
    //       timerProgressBar: true,
    //       didOpen: (toast) => {
    //         toast.addEventListener("mouseenter", Swal.stopTimer);
    //         toast.addEventListener("mouseleave", Swal.resumeTimer);
    //       },
    //     });
    //     toastMixin.fire({
    //       icon: "error",
    //       animation: true,
    //       title: "Register gagal!",
    //     });
    //   });
  };

  useEffect(() => {
    getInstitution();
  }, []);

  const getInstitution = async () => {
    await axios.get("http://localhost:5000/api/v1/institution").then((res) => {
      const getData = res.data.data;

      let pelatihan = [];
      for (let i = 0; i < getData.length; i++) {
        pelatihan.push({
          value: getData[i].id,
          label: getData[i].institutionName,
        });
      }
      setInstitutionData(pelatihan);
    });
  };

  const onChange = (value) => {
    setInstitution(value);
  };

  const onSearch = (value) => {
    console.log("search:", value);
  };

  return (
    <>
      <section className="pt-36">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-10">
              <h1 className="text-3xl font-bold mb-2 text-slate-800">Register</h1>
              <p className="text-base text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center mx-auto rounded-lg shadow-xl bg-white max-w-4xl">
            <div className="w-full md:w-1/2 ">
              <img src={Image} className="w-full " alt="Register" />
            </div>

            <div className="w-full md:w-1/2 p-10 text-slate-800">
              <form>
                <div className="mb-4">
                  <label for="institutionName" className="text-base">
                    Nama Lembaga
                  </label>
                  <Select
                    showSearch
                    className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Pilih nama lembaga"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                    options={institutionData}
                    bordered={false}
                  />
                </div>

                <div className="mb-4">
                  <label for="name" className="text-base">
                    Nama Lengkap
                  </label>
                  <input
                    type="name"
                    className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Nama Lengkap"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label for="email" className="text-base">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label for="password" className="text-base">
                    Password
                  </label>

                  <Input.Password
                    placeholder="Password"
                    style={{
                      borderRadius: "5px",
                    }}
                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  onClick={register}
                  className="w-full px-6 py-2.5 text-white font-medium text-base tracking-wide leading-snug rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out"
                >
                  Register
                </button>

                <p className="mt-2 text-slate-500 text-center ">
                  Sudah punya akun?{" "}
                  <Link to="/login">
                    <a className="text-cyan-500 font-semibold hover:text-sky-600">Login disini</a>
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
