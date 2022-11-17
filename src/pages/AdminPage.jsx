import React from "react";
import { Routes, Route } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineTable } from "react-icons/hi";
import Dashboard from "../components/Admin/Dashboard";
import Tables from "../components/Admin/Tables";
import Sidebar from "../components/Admin/Sidebar";

const AdminPage = () => {
  const icon = {
    className: "w-5 h-5 text-inherit",
  };

  const routes = [
    {
      layout: "dashboard",
      pages: [
        {
          icon: <AiFillHome {...icon} />,
          name: "dashboard",
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          icon: <HiOutlineTable {...icon} />,
          name: "tables",
          path: "/tables",
          element: <Tables />,
        },
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-100">
        <Sidebar />
        <div className="p-4 xl:ml-80">
          ini dashboard
          <Routes>{routes.map(({ layout, pages }) => layout === "dashboard" && pages.map(({ path, element }) => <Route exact path={path} element={element} />))}</Routes>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
