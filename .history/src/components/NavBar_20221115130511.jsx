import React, { useState, Fragment } from "react";
import { Transition, Menu, Disclosure } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/image/logo-ussi.png";
import { message } from "antd";
import { useSelector } from "react-redux";
import { RiArrowDownSLine } from "react-icons/ri";
import "../App.css";
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';


window.onscroll = function () {
  const header = document.querySelector("nav");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

const links = [
  { href: "/pelatihan", label: "Pelatihan" },
  { href: "/", label: "Jadwal Pelatihan" },
];

function NavBar({ theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.accessToken);
  const navigate = useNavigate();

  const handleLogout = () => {
    // jsCookie.remove('auth')
    localStorage.removeItem("persist:auth");
    message.success("Logout Berhasil.");
    navigate("/");
    setTimeout(window.location.reload.bind(window.location), 500);
  };

  return (
    <nav className={["absolute top-0 left-0 w-full px-4 z-[9999]", theme === "dark" ? "bg-transparent" : "bg-white shadow-md"].join(" ")}>
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
                <a className={["hover:text-cyan-500 px-3 py-2 text-base", theme === "dark" ? "text-white" : "text-black"].join(" ")}>Beranda</a>
              </Link>

              <Link to="/profile">
                <a className="hover:text-cyan-500 px-3 py-2 text-base text-black">Tentang</a>
              </Link>

              <Menu as="div" className="relative">
                <Menu.Button className="inline-flex items-center hover:text-cyan-500 px-3 py-2 text-base text-black ">
                  Pelatihan
                  <RiArrowDownSLine className="ml-2 text-black" aria-hidden="true" />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-6 w-52 origin-top-right rounded-md bg-white shadow-lg p-2">
                    {links.map((link) => (
                      <Menu.Item as="a" key={link.href} href={link.href} className="text-black flex w-full items-center px-4 py-2 text-base hover:bg-slate-700 hover:text-white rounded-md">
                        {link.label}
                      </Menu.Item>
                    ))}
                  </Menu.Items>
                </Transition>
              </Menu>

              <Link to="/pendaftaran">
                <a href="#" className="hover:text-cyan-500 px-3 py-2 rounded-md text-base text-black">
                  Pendaftaran
                </a>
              </Link>

              <Link to="/contact">
                <a className="hover:text-cyan-500 px-3 py-2 text-base text-black">Kontak</a>
              </Link>
            </div>
          </div>

          <div className="hidden md:block ">
            {isLoggedIn ? (
              <a className="text-base group-hover:text-cyan-500 py-2 mx-8 flex" onClick={handleLogout}>
                Logout
              </a>
            ) : (
              <Link to="/login">
                <a className="hover:text-cyan-500 text-base text-black border-2 border-cyan-500 rounded-full py-1.5 px-6 ml-5">Login</a>
              </Link>
            )}
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

              <Menu as="div" className="relative">
                <Disclosure>
                  <Disclosure.Button className="inline-flex items-center hover:bg-slate-700 hover:text-white text-black px-4 py-2 rounded-md text-base ">
                   Pelatihan
                    <RiArrowDownSLine className="ml-2 text-black" aria-hidden="true" />
                  </Disclosure.Button>
                  <Disclosure.Panel className="text-gray-500 ml-10">
                    <Link to="/pelatihan">
                        <a className="hover:bg-slate-700 hover:text-white text-black block px-4 py-2 rounded-md text-base">Pelatihan</a>
                      </Link>

                    <Link to="/jadwal-pelatihan">
                        <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Jadwal Pelatihan</a>
                      </Link>
                  </Disclosure.Panel>
                </Disclosure>
              </Menu>

              {/* <div>
                <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Pelatihan</a>
                <Paper sx={{ width: 320 }}>
                  <MenuList dense>
                    <MenuItem>
                      <ListItemText inset>
                        <Link to="/pelatihan">
                          <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Pelatihan</a>
                        </Link>
                      </ListItemText>
                    </MenuItem>
                    <MenuItem>
                      <ListItemText inset>
                        <Link to="/pelatihan">
                          <a className="text-black hover:bg-slate-700 hover:text-white block px-4 py-2 rounded-md text-base">Jadwal Pelatihan</a>
                        </Link>
                      </ListItemText>
                    </MenuItem>
                  </MenuList>
                </Paper>
              </div> */}

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
