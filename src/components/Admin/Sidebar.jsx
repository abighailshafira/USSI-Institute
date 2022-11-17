import React from "react";
import PropTypes from "prop-types";
// import { useMaterialTailwindController } from "./context";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Button, Typography } from "@material-tailwind/react";

const Sidebar = ({ logo, company, routes }) => {
  // const [controller] = useMaterialTailwindController();
  // const { openSideBar } = controller;

  // const menu = [
  //   { name: "Beranda", icon: <AiFillHome /> },
  //   { name: "Input Pelatihan", icon: <FaPencilAlt /> },
  //   { name: "Rekap Pelatihan", icon: <AiOutlineUnorderedList /> },
  //   { name: "Peserta", icon: <FaUserFriends /> },
  // ];

  return (
    <>
      <aside
        // className={`${openSideBar ? "translate-x-0" : "-translate-x-80"} fixed inset-0 z-50 my-4 ml-4 w-72 rounded-xl bg-blue-gray-900 shadow-xl transition duration-300 ease-in-out xl:translate-x-0`}
        className="translate-x-0fixed inset-0 z-50 my-4 ml-4 w-72 rounded-xl bg-blue-gray-900 shadow-xl transition duration-300 ease-in-out xl:translate-x-0"
      >
        <div
          className="relative rounded-tl-xl rounded-tr-xl 
          border-b border-white/20 bg-gradient-to-br from-blue-gray-800 to-blue-gray-900"
        >
          <Link to="/" className="flex items-center gap-4 py-6 px-8">
            <Avatar src={logo} size="sm" />
            <Typography variant="h6" color="white">
              {company}
            </Typography>
          </Link>
        </div>

        <div className="m-4">
          {routes.map(({ layout, pages }, key) => (
            <ul key={key} className="mb-4 flex flex-col gap-1">
              {pages.map(({ icon, name, path }) => (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button variant={isActive ? "gradient" : "text"} color={isActive ? "white" : "blue-gray"} className="flex items-center gap-3 px-4 capitalize" fullWidth>
                        {icon}
                        <Typography color="inherit" className="font-medium">
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </aside>
    </>
  );
};

Sidebar.defaultProps = {
  logo: "../../assets/image/logo-ussi.png",
  company: "USSI Institute",
};

Sidebar.propTypes = {
  logo: PropTypes.string,
  company: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidebar;
