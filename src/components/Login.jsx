import { checkValidData} from '../utils/validate';
import Header from "./Header";
import poster from '../assets/background.jpg';
import { useState , useRef} from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, seterrorMessage] = useState(null);
  const handleButtonClick =()=>{
       const message=checkValidData(email.current.value,password.current.value);
       seterrorMessage(message);
  }
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