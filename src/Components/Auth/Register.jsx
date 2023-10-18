import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalDataContext } from "../../ContextApi/DataContext";
const Register = ({ setPageToggle }) => {
  const { createEmailUser, googleLogin } = useContext(GlobalDataContext);
  //Email And Password Registration
  const createEmailAndPassUser = () => {
    const email = "test@gmail.com";
    const password = "test@gmail.com";
    createEmailUser(email, password)
      .then((user) => console.log(user))
      .then((error) => console.log(error));
  };

  //Google Login
  const loginWithGoogle =() => {
    googleLogin()
    .then((user) => console.log(user))
    .then((error) => console.log(error));
  }

  return (
    <div>
      <button
        onClick={() => {
          createEmailAndPassUser();
        }}
      >
        Do Reg
      </button>
      <button
        onClick={() => {
          loginWithGoogle();
        }}
      >
        Google Login
      </button>
      Register
      <button
        onClick={() => {
          setPageToggle(false);
        }}
      >
        Go To Login
      </button>
    </div>
  );
};

Register.propTypes = {
  setPageToggle: PropTypes.func,
};

export default Register;
