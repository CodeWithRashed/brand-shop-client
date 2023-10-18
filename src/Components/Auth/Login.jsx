import PropTypes from "prop-types";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ setPageToggle }) => {
  const { googleLogin, loginWithEmail } = useContext(GlobalDataContext);
  const navigator = useNavigate();
  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmail(email, password)
    .then(() => {
      toast.success("Login Successful, Redirecting", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        navigator("/");
      }, "2000");
    })
      .then();
  };

  //Google Login
  const loginWithGoogle = () => {
    googleLogin()
      .then(() => {
        toast.success("Login Successful, Redirecting", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigator("/");
        }, "2000");
      })
      .then((error) => console.log(error));
  };

  return (
    <div>
      <div className="px-10 py-20">
        <div className="w-1/2 shadow-lg border-x-2 border-t-2 border-red-200 rounded-t-xl h-1/2 mx-auto p-8">
          Login
        </div>
        <div className="w-1/2 shadow-2xl h-1/2 mx-auto p-8 rounded-b-xl">
          <form onSubmit={handleLoginSubmit} className="flex flex-col gap-5">
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <span>Your Email</span>
              <input
                required
                className="border-2 p-2 rounded-xl border-red-200"
                type="email"
                placeholder="Enter Your Email..."
                name="email"
                id=""
              />
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <span>Password</span>
              <input
                className="border-2 p-2 rounded-xl border-red-200"
                type="text"
                placeholder="Type Your Password..."
                name="password"
                id=""
                required
              />
            </div>

            <button
              className="border-2 p-2 rounded-xl border-red-200"
              type="submit"
            >
              Login
            </button>
          </form>
          <div className="cta mt-4 text-center">
            New Here?
            <button
              className="text-blue-500"
              onClick={() => {
                setPageToggle(true);
              }}
            >
              Create an Account
            </button>
            <div>
              <p>or</p>
              <span>Login With</span>
              <button
                className="border-2 border-red-200 p-2 ml-2 rounded-xl mt-3"
                onClick={() => {
                  loginWithGoogle();
                }}
              >
                Google Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
Login.propTypes = {
  setPageToggle: PropTypes.func,
};

export default Login;
