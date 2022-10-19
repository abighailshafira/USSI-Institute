import React from "react";
import Logo from "./assets/image/logo-ussi.png";

const NavBar = () => {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="index.html" className="py-4 block">
                <img src={Logo} alt="LOGO" className="h-10" />
              </a>
            </div>

            <div className="px-4 flex items-center">
              <button
                id="hamburger"
                name="hamburger"
                type="button"
                className="block absolute right-4 lg:hidden"
              >
                <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:bg-transparent lg:static lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex lg:text-white">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base group-hover:text-cyan-500 py-2 mx-8 flex"
                    >
                      Beranda
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="./page/profile.html"
                      className="text-base group-hover:text-cyan-500 py-2 mx-8 flex"
                    >
                      Profil
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="#"
                      className="text-base group-hover:text-cyan-500 py-2 mx-8 flex"
                    >
                      Pelatihan
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="./page/pendaftaran.html"
                      className="text-base group-hover:text-cyan-500 py-2 mx-8 flex"
                    >
                      Pendaftaran
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="./page/contact.html"
                      className="text-base group-hover:text-cyan-500 py-2 mx-8 flex"
                    >
                      Kontak
                    </a>
                  </li>
                  <li className="group">
                    <a
                      href="./page/login.html"
                      className="flex text-base font-semibold text-white bg-gradient-to-r from-cyan-300 to-sky-600 py-2 px-6 rounded-md hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                    >
                      Login
                    </a>
                  </li>
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
