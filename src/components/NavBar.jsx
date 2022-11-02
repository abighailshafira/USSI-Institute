import { message } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/image/logo-ussi.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { Dropdown, Menu, Space } from "antd";
import "../App.css";

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// const hamburger = document.querySelector("#hamburger");
// const navMenu = document.querySelector("#nav-menu");

// hamburger.addEventListener("click", function () {
//   hamburger.classList.toggle("hamburger-active");
//   navMenu.classList.toggle("hidden");
// });

const NavBar = ({ theme }) => {
  const isLoggedIn = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const handleLogout = () => {
    // jsCookie.remove('auth')
    localStorage.removeItem("persist:auth");
    message.success("Logout Berhasil.");
    navigate("/");
    setTimeout(window.location.reload.bind(window.location), 500);
  };

  const menu = (
    <Menu
      className="pt-0"
      items={[
        {
          label: (
            <Link to="#">
              <a>Jadwal Pelatihan</a>
            </Link>
          ),
          key: "0",
        },
        {
          label: (
            <Link to="/pelatihan">
              <a>Pelatihan</a>
            </Link>
          ),
          key: "1",
        },
      ]}
    />
  );

  return (
    <>
      <header className={["absolute top-0 left-0 w-full flex items-center z-10 md:py-2", theme === "dark" ? "bg-transparent" : "bg-white shadow-md"].join(" ")}>
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link to="/">
                <a className="py-4 block">
                  <img src={Logo} alt="USSI Institute" className="h-10" />
                </a>
              </Link>
            </div>

            <div className="px-4 flex items-center pt-2.5">
              <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                <span className={["hamburger-line transition duration-300 ease-in-out origin-top-left", theme === "dark" ? "bg-white" : "bg-black"].join(" ")}></span>
                <span className={["hamburger-line transition duration-300 ease-in-out", theme === "dark" ? "bg-white" : "bg-black"].join(" ")}></span>
                <span className={["hamburger-line transition duration-300 ease-in-out origin-bottom-left", theme === "dark" ? "bg-white" : "bg-black"].join(" ")}></span>
              </button>

              <nav id="nav-menu" className="hidden absolute pt-3 lg:pt-0 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:bg-transparent lg:static lg:max-w-full lg:shadow-none lg:rounded-none">
                <ul className={["block lg:flex", theme === "dark" ? "text-white" : "text-black"].join(" ")}>
                  <li className="group">
                    <Link to="/">
                      <a className="text-base group-hover:text-cyan-500 py-2 mx-8 flex ">Beranda</a>
                    </Link>
                  </li>

                  <li className="group">
                    <Link to="/profile">
                      <a className="text-base group-hover:text-cyan-500 py-2 mx-8 flex ">Profil</a>
                    </Link>
                  </li>

                  <li className="group">
                    <Dropdown className="pt-36" overlay={menu} trigger={["hover"]}>
                      <a onClick={(e) => e.preventDefault()}>
                        <Space className="text-base group-hover:text-cyan-500 py-2 mx-8 flex">
                          Pelatihan
                          <RiArrowDownSLine />
                        </Space>
                      </a>
                    </Dropdown>
                    {/* <Link to="/pelatihan">
                      <a className="text-base group-hover:text-cyan-500 py-2 mx-8 flex">
                        Pelatihan
                      </a>
                    </Link> */}
                  </li>

                  <li className="group">
                    <Link to="/pendaftaran">
                      <a className="text-base group-hover:text-cyan-500 py-2 mx-8 flex">Pendaftaran</a>
                    </Link>
                  </li>

                  <li className="group">
                    <Link to="/contact">
                      <a className="text-base group-hover:text-cyan-500 py-2 mx-8 flex">Kontak</a>
                    </Link>
                  </li>

                  {isLoggedIn ? (
                    <li className="group">
                      <a className="text-base group-hover:text-cyan-500 py-2 mx-8 flex" onClick={handleLogout}>
                        JANCOK LOGOUT AE!!
                      </a>
                    </li>
                  ) : (
                    <li className="group">
                      <Link to="/login">
                        <a className={["flex text-base py-2 mx-8 lg:border-2 lg:border-cyan-500 text-black lg:text-white lg:rounded-full lg:py-1.5 lg:px-6 lg:ml-5", theme === "dark" ? "text-white" : "text-black"].join(" ")}>Login</a>
                      </Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
