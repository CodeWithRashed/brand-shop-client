import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { toast } from "react-toastify";
const Navbar = () => {
  const { activeUser, userLogout, userPhoto} = useContext(GlobalDataContext);

  const mobileNav = (
    <div>
      <ul className="flex flex-col gap-4 menu dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-200" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-200" : ""
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
                isActive ? "border-b-2 border-red-200" : ""
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
                isActive ? "border-b-2 border-red-200" : ""
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
                isActive ? "border-b-2 border-red-200" : ""
              }
            >
              Add Product
            </NavLink>{" "}
          </li>
        )}
      </ul>
    </div>
  );
  const desktopNav = (
    <div className="hidden lg:block menu menu-horizontal bg-base-100">
      <ul className="menu menu-horizontal flex gap-10 mr-5">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-200" : ""
            }
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "border-b-2 border-red-200" : ""
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
                isActive ? "border-b-2 border-red-200" : ""
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
                isActive ? "border-b-2 border-red-200" : ""
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
                isActive ? "border-b-2 border-red-200" : ""
              }
            >
              Add Product
            </NavLink>{" "}
          </li>
        )}
      </ul>
    </div>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link>
            {}
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
                <FiMenu className="text-3xl"></FiMenu>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3  z-[100] card card-compact dropdown-content w-52 bg-base-100 shadow"
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
