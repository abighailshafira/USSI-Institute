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

function NavBar2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav>
        <div className="container mx-auto py-2 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ">
              <div className="px-4 ">
                <Link to="/">
                  <a className="py-4 block">
                    <img src={Logo} alt="USSI Institute" className="h-10" />
                  </a>
                </Link>
              </div>

              <div className="px-4 hidden md:block ">
                <div className="flex items-center  space-x-4">
                  <a href="#" className=" hover:bg-gray-700 text-black px-3 py-2 rounded-md text-sm font-medium">
                    Dashboard
                  </a>

                  <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Team
                  </a>

                  <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Projects
                  </a>

                  <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Calendar
                  </a>

                  <a href="#" className="text-black hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Reports
                  </a>
                </div>
              </div>
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
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="#" className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium">
                  Dashboard
                </a>

                <a href="#" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Team
                </a>

                <a href="#" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Projects
                </a>

                <a href="#" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Calendar
                </a>

                <a href="#" className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar2;
