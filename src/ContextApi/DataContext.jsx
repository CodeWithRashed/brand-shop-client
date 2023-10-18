import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth";
//Global Data Sending Context
export const GlobalDataContext = createContext(null);

//Google Login Auth Info
import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

//Firebase Auth
import { auth } from "../Config/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

//Data Context Components
const DataContext = ({ children }) => {
const [activeUser, setActiveUser] = useState(null)



  //Create User Email & Pass Func
  const createEmailUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin  = () => {
    return signInWithPopup(auth, provider)
  }

  //Login With Email And Password
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

//User Watch
 onAuthStateChanged(auth, (user)=>{
  console.log(user)
setActiveUser(user)
})

  //Global Data Export
  const globalDataVariable = { createEmailUser, googleLogin, loginWithEmail};
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
