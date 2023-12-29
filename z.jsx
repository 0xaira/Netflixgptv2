import { checkValidData } from '../utils/validate';
import Header from "./Header";
import poster from '../assets/background.jpg';
import { useState, useRef } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDM3UvqJAQz0kuLAL0wCQSbB0WFh6e1jKY",
  authDomain: "netflixgpt-39b4f.firebaseapp.com",
  projectId: "netflixgpt-39b4f",
  storageBucket: "netflixgpt-39b4f.appspot.com",
  messagingSenderId: "761075110806",
  appId: "1:761075110806:web:1b8bf49c7cc873f4d5c3b7",
  measurementId: "G-EZVFC363YW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    const auth = getAuth();

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://e1.pxfuel.com/desktop-wallpaper/447/176/desktop-wallpaper-gojo-satoru-gojo-pfp.jpg",
          })
            .then(() => {
              navigate("/browse");
              // ... (dispatch logic or any other actions needed after successful sign-up)
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse"); // Redirect to browse page upon successful sign-in
        })
        .catch((error) => {
          setErrorMessage(error.message); // Set error message if sign-in fails
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>

      <Header />
      <div className="relative">
        <div className="absolute w-full">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img src={poster} alt='poster' className='w-full' style={{ zIndex: 0 }} />
        </div>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        {errorMessage && <p className='text-red-500 font-bold text-lg '>{errorMessage}</p>}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-300">
              Remember Me
            </label>
          </div>
          <p className="text-gray-300 cursor-pointer">Need Help?</p>
        </div>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};
export default Login;