import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { activeUser, userLogout, userPhoto } = useContext(GlobalDataContext);

  //Dark Mode Toggle
  const [theme, setTheme] = useState("");
  const [icon, setIcon] = useState("");

  // update state on toggle
  const handleToggle = async (event) => {
    if (event.target.checked) {
      localStorage.setItem("theme", "dark");
      setIcon("dark");
      setTheme("dark");
      if (icon == "dark") {
        setTheme("light");
        setIcon("light");
        localStorage.setItem("theme", "light");
        console.log("inside")
      }
      console.log("theme",theme, "icon",icon, "clicked")
    }

    if (!event.target.checked) {
      localStorage.setItem("theme", "light");
      setTheme("light");
      setIcon("light");
      if (icon == "light") {
        setTheme("dark");
        setIcon("dark");
        localStorage.setItem("theme", "dark");
        console.log("inside")
      }
      console.log("clicked on false");
    }
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const localTheme = localStorage.getItem("theme");
    setIcon(localTheme);
    if (localTheme == "dark") {
      htmlElement.classList.add("dark");
      htmlElement.classList.remove("light");
      setIcon("dark");
    } else {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
      setIcon("light");
    }
  }, [theme, icon]);

  const mobileNav = (
    <div className="dark:bg-gray-800 dark:text-white">
      <ul className="dark:bg-gray-800 dark:text-white text-lg font-bold flex flex-col gap-4 menu dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                : "dark:focus:text-white dark:hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                : "dark:focus:text-white dark:hover:text-white"
            }
          >
            Product
          </NavLink>
        </li>

        {activeUser && (
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                  : "dark:focus:text-white dark:hover:text-white"
              }
            >
              Cart
            </NavLink>
          </li>
        )}

        {!activeUser && (
          <li>
            {" "}
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                  : "dark:focus:text-white dark:hover:text-white"
              }
            >
              Login
            </NavLink>
          </li>
        )}

        {activeUser && (
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                  : "dark:focus:text-white dark:hover:text-white"
              }
            >
              Add Product
            </NavLink>
          </li>
        )}
        <li>
          <label className="swap swap-rotate flex justify-start items-center h-full">
            {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" />
            {icon == "dark" ? (
              <BsFillSunFill className="flex justify-center items-center h-full"></BsFillSunFill>
            ) : (
              <BsMoonFill className="text-left"></BsMoonFill>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
  const desktopNav = (
    <div className="hidden text-lg lg:block menu menu-horizontal dark:text-white dark:bg-gray-800 bg-base-100">
      <ul className="text-lg font-bold menu menu-horizontal flex gap-10 mr-5  ">
        <li className="dark:focus:text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-[#ff2d37]  dark:focus:text-white dark:hover:text-white"
                : "dark:focus:text-white dark:hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                : "dark:focus:text-white dark:hover:text-white"
            }
          >
            Product
          </NavLink>
        </li>

        {activeUser && (
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                  : "dark:focus:text-white dark:hover:text-white"
              }
            >
              Cart
            </NavLink>
          </li>
        )}

        {!activeUser && (
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                  : "dark:focus:text-white dark:hover:text-white"
              }
            >
              Login
            </NavLink>
          </li>
        )}

        {activeUser && (
          <li>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 border-[#ff2d37] dark:focus:text-white dark:hover:text-white"
                  : "dark:focus:text-white dark:hover:text-white"
              }
            >
              Add Product
            </NavLink>
          </li>
        )}
        <li>
          <label className="swap swap-rotate flex justify-center items-center h-full dark:focus:text-white dark:hover:text-white">
            {/* this hidden checkbox controls the state */}
            <input onChange={handleToggle} type="checkbox" />
            {icon == "dark" ? (
              <BsFillSunFill className="flex justify-center items-center h-full"></BsFillSunFill>
            ) : (
              <BsMoonFill className="flex justify-center items-center w-full h-full"></BsMoonFill>
            )}
          </label>
        </li>
      </ul>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100 dark:bg-gray-800 px-[5%]">
        <div className="flex-1">
          <Link>
            <img className="w-4/5 lg:w-3/4" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Desktop Navbar Start */}
        <div>{desktopNav}</div>
        {/* Desktop Navbar End */}

        <div className="flex-none">
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <FiMenu className="text-3xl dark:text-white"></FiMenu>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3  z-[100] card card-compact dropdown-content w-52 dark:bg-gray-800 bg-base-100 shadow"
            >
              {/* Mobile Navbar Start */}
              <div>{mobileNav}</div>
              {/* Mobile Navbar End */}
            </div>
          </div>
          {activeUser && (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {activeUser ? (
                    <img src={userPhoto || activeUser?.photoURL} alt="" />
                  ) : (
                    <FaUserCircle className="h-full w-full"></FaUserCircle>
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>

                <li>
                  <button
                    onClick={() => {
                      userLogout();
                      toast.success("Logout Successful", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                      });
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
