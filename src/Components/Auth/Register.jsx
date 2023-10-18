import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = ({ setPageToggle }) => {
  const { createEmailUser, googleLogin, userInfoUpdate, setUserPhoto } =
    useContext(GlobalDataContext);
  const passwordRegex =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?=.*[a-zA-Z\d@#$%^&+=!]).{8,}$/;
  const [passError, setPassError] = useState(null);

  const navigator = useNavigate();
  //Handle Submit Info
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.password.value;
    const email = form.email.value;
    const password = form.password.value;
    const imageUrl = form.imageUrl.value;

    //User Data
    const user = { name, email, password, imageUrl };
    //Send User Data to Database
    try {
      const response = await fetch(
        "http://localhost:3000/api/addUser",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        const isValidPassword = passwordRegex.test(password);
        //Password Error Message
        if (!isValidPassword) {
          const invalidMessage = 
            "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
          setPassError(invalidMessage);

          return;
        }
        await response.json()
        setPassError(null);
        setUserPhoto(imageUrl);
        userInfoUpdate(name, imageUrl);
        // Email And Password Registration
        await createEmailUser(email, password);

        //Toast Alert
        toast.success("Account Created, Redirecting", {
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
        }, 2000);
      }
    } catch (error) {
      console.error(error);
    }
  };

  //Google Login
  const loginWithGoogle = () => {
    googleLogin()
      .then(() => {
        navigator("/");
        setTimeout(() => {
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
        }, 2000);
      })
      .then();
  };

  return (
    <div className="px-10 py-20">
      <div className="w-1/2 shadow-lg border-x-2 border-t-2 border-red-200 rounded-t-xl h-1/2 mx-auto p-8">
        Create an Account
      </div>
      <div className="w-1/2 shadow-2xl h-1/2 mx-auto p-8 rounded-b-xl">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name Field */}
          <div className="flex flex-col gap-1">
            <span>Your Name</span>
            <input
              required
              className="border-2 p-2 rounded-xl border-red-200"
              type="text"
              placeholder="Type Your Name..."
              name="name"
              id=""
            />
          </div>

          {/* Image Field */}
          <div className="flex flex-col gap-1">
            <span>Image URL</span>
            <input
              required
              className="border-2 p-2 rounded-xl border-red-200"
              type="text"
              placeholder="Enter Image URL..."
              name="imageUrl"
              id=""
            />
          </div>

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
            Register
          </button>
        </form>
        {passError ? <p className="text-center text-red-500 my-2">{passError}</p> : ""}
        <div className="cta mt-4 text-center">
         <span className="mr-3"> Already Have an Account?</span>
          <button
            className="text-blue-500"
            onClick={() => {
              setPageToggle(false);
            }}
          >
            Login Here
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
  );
};

Register.propTypes = {
  setPageToggle: PropTypes.func,
};

export default Register;
