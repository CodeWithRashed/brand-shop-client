import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
//Global Data Sending Context
export const GlobalDataContext = createContext(null);

//Google Login Auth Info
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

//Firebase Auth
import { auth } from "../Config/FirebaseConfig";

//Data Context Components
const DataContext = ({ children }) => {
  //Create User Email & Pass Func
  const createEmailUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin  = () => {
    return signInWithPopup(auth, provider)
  }

  //Global Data Export
  const globalDataVariable = { createEmailUser, googleLogin};
  return (
    <GlobalDataContext.Provider value={globalDataVariable}>
      {children}
    </GlobalDataContext.Provider>
  );
};
DataContext.propTypes = {
  children: PropTypes.node,
};
export default DataContext;
