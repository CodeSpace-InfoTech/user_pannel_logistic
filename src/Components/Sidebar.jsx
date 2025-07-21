import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import feather from "feather-icons";
import Swal from "sweetalert2";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    feather.replace();
  }, []);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      console.log('result', result)
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/login";
      }
    });
  };

  const navItems = [
    { path: "/user/dashboard", name: "Dashboard", icon: "monitor", sequence: 1 },
    // { path: "/user/customer", name: "Customer", icon: "users", sequence: 3 },
    { path: "/user/employees", name: "Employees", icon: "user-check", sequence: 2 },
    { path: "/user/time-logs", name: "Time Logs", icon: "clock", sequence: 6 },
    { path: "/user/loads", name: "Loads", icon: "truck", sequence: 4 },
    {
      path: "logout",
      name: "Logout",
      icon: "log-out",
      sequence: 7,
      onClick: handleLogout,
    },
  ].sort((a, b) => a.sequence - b.sequence);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="main-sidebar">
      <section className="sidebar position-relative">
        <div className="multinav">
          <div className="multinav-scroll" style={{ height: "100%" }}>
            <ul className="sidebar-menu tree" data-widget="tree">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className={`treeview ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.path === "logout" ? (
                    <a onClick={item.onClick} style={{ cursor: "pointer" }}>
                      <i data-feather={item.icon}></i>
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link to={item.path}>
                      <i data-feather={item.icon}></i>
                      <span>{item.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
