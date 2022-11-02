import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/image/logo-ussi.png";
import "../App.css";

window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

function NavBar({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={["absolute top-0 left-0 w-full px-4", theme === "dark" ? "bg-transparent" : "bg-white shadow-md"].join(" ")}>
      <div className="container py-2">
        <div className="flex items-center justify-between h-16 relative">
          <div className="">
            <Link to="/">
              <a className="py-4 block">
                <img src={Logo} alt="USSI Institute" className="h-10" />
              </a>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/">
                <a className="hover:text-cyan-500 px-3 py-2 rounded-md text-base text-black">Beranda</a>
              </Link>

              <Link to="/profile">
                <a className="hover:text-cyan-500 px-3 py-2 rounded-md text-base text-black">Tentang</a>
              </Link>

              <Link to="/pelatihan">
                <a className="hover:text-cyan-500 px-3 py-2 rounded-md text-base text-black">Pelatihan</a>
              </Link>

              <Link to="/pendaftaran">
                <a href="#" className="hover:text-cyan-500 px-3 py-2 rounded-md text-base text-black">
                  Pendaftaran
                </a>
              </Link>

              <Link to="/contact">
                <a className="hover:text-cyan-500 px-3 py-2 rounded-md text-base text-black">Kontak</a>
              </Link>
            </div>
          </div>

          <div className="hidden md:block ">
            {" "}
            <Link to="/login">
              <a className="hover:text-cyan-500 text-base text-black border-2 border-cyan-500 rounded-full py-1.5 px-6 ml-5">Login</a>
            </Link>
          </div>

          {/* hamburger */}
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="bg-slate-700 inline-flex items-center justify-center p-2 rounded-md text-white shadow-md" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* responsive */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden container" id="mobile-menu">
            <div ref={ref} className="pt-2 pb-3 space-y-1">
              <Link to="/">
                <a className="hover:bg-slate-700 hover:text-white text-black block px-4 py-2 rounded-md text-base">Beranda</a>
              </Link>

              <Link to="/profile">
                <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Tentang</a>
              </Link>

              <Link to="/pelatihan">
                <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Pelatihan</a>
              </Link>

              <Link to="/pendaftaran">
                <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Pendaftaran</a>
              </Link>

              <Link to="/contact">
                <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Kontak</a>
              </Link>

              <Link to="/login">
                <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Login</a>
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default NavBar;
