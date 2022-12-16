import React, { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Image from "../../assets/image/register.png";
import { Input, Select } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleOutlined } from "@ant-design/icons";
import Swal from "sweetalert2";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const FormRegister = () => {
  const [institution, setInstitution] = useState("");
  const [institutionData, setInstitutionData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // console.log(institution);
  // console.log(institutionData);
  const onSubmit = (data) => {
    console.log(data);
  };

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidName(USER_REGEX.test(user));
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = new URLSearchParams();
    userData.append("name", name);
    userData.append("email", email);
    userData.append("password", password);
    userData.append("role", "member");
    userData.append("institutionId", institution);

    // const v1 = USER_REGEX.test(user);
    // const v2 = PWD_REGEX.test(pwd);

    // if (!v1 || !v2) {
    //     setErrMsg("Invalid Entry");
    //     return;
    // }

    axios({
      method: "post",
      url: ` http://45.13.132.160:5000/register`,
      data: userData,
    })
      .then((res) => {
        var toastMixin = Swal.mixin({
          icon: "success",
          title: "Title",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        toastMixin.fire({
          title: res.data.message,
        });

        // setUser('');
        // setPwd('');
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        var toastMixin = Swal.mixin({
          icon: "success",
          title: "Title",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        toastMixin.fire({
          icon: "error",
          // animation: true,
          title: "Register Gagal",
        });
      });
  };

  useEffect(() => {
    getInstitution();
  }, []);

  const getInstitution = async () => {
    await axios.get(" http://45.13.132.160:5000/institution").then((res) => {
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
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <a href="#">Sign In</a>
          </p>
        </section>
      ) : (
        <section className="pt-36">
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
            {errMsg}
          </p>
          <div className="container">
            <div className="w-full px-4">
              <div className="max-w-xl mx-auto text-center mb-10">
                <h1 className="text-3xl font-bold mb-2 text-slate-800">Register</h1>
                <p className="text-base text-slate-500">Silahkan daftarkan identitas anda</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center mx-auto rounded-lg shadow-xl bg-white max-w-4xl">
              <div className="w-full md:w-1/2 ">
                <img src={Image} className="w-full " alt="Register" />
              </div>

              <div className="w-full md:w-1/2 p-10 text-slate-800">
                <form id="form" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="namaLembaga" className="text-base">
                      Nama Lembaga
                    </label>
                    <Select
                      name="namaLembaga"
                      showSearch
                      className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      placeholder="Pilih nama lembaga"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
                      options={institutionData}
                      bordered={false}
                      required
                    />
                  </div>

                  <div className="mb-4 form-group text-base">
                    <label htmlFor="namaLengkap" className="text-base">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      placeholder="Nama Lengkap"
                      onChange={(e) => setName(e.target.value)}
                      ref={userRef}
                      // autoComplete="off"
                      // value={user}
                      required
                    />
                  </div>

                  <div className="mb-4 form-group">
                    <label htmlFor="email" className="text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control block w-full px-3 py-1.5 text-sm bg-white bg-clip-padding border border-solid border-gray-300 rounded-md transition ease-in-out m-0 focus:outline-none focus:ring-cyan-500 focus:ring-1 focus:border-cyan-500"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-4 form-group text-base">
                    <label htmlFor="password" className="text-base">
                      Password
                    </label>

                    <Input.Password
                      placeholder="Password"
                      type="text"
                      id="password"
                      style={{
                        borderRadius: "5px",
                      }}
                      iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                      onChange={(e) => setPassword(e.target.value)}
                      // value={pwd}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    // onClick={handleSubmit}
                    className="w-full px-6 py-2.5 text-white font-medium text-base tracking-wide leading-snug rounded-md bg-gradient-to-r from-cyan-500 to-sky-600 hover:bg-gradient-to-l hover:to-sky-600 hover:from-cyan-500 transition duration-300 ease-in-out"
                    // disabled={!validName || !validPwd ? true : false}
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
      )}
    </>
  );
};

export default FormRegister;
