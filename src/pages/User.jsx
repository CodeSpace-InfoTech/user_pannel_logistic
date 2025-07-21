import React, { useEffect } from "react";
import Dashboard from "./Dashboard";
import Customer from "./Customer";
import Employees from "./Employees";
import TimeLogs from "./TimeLogs";
import Loads from "./Loads";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Profile from "./Profile";
import LoadDetails from "./LoadDetails";



const User = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/user") {
      navigate("/user/dashboard");
    }
  }, [pathname, navigate]);

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
      </div>
      <div className="content-wrapper">
        <div className="container-full">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            {/* <Route path="customer" element={<Customer />} /> */}
            <Route path="employees" element={<Employees />} />
            <Route path="time-logs" element={<TimeLogs />} />
            <Route path="loads" element={<Loads />} />
            <Route path="/loads/load-details" element={<LoadDetails />} />
     <Route path="profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default User;
