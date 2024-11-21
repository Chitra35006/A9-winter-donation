import React, { useContext,  useState  } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
const Login = () => {

    const{setUser,signInWithEmail} = useContext(AuthContext);

    const [errorMessage, setErrorMessage] = useState(null);

    const location = useLocation();
    console.log(location);

    const navigate = useNavigate();

    const handleSubmit =(e)=>{
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log({email,password});
    setErrorMessage('');
    signInWithEmail(email,password)
    .then(result =>{
      const user = result.user;
      setUser(user);
      const from = location.state?.from?.pathname || "/";
                navigate(from, { replace: true });
    })
    .catch((err)=>{
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log('Error',err);
      if (errorCode === "auth/invalid-credential") {
        setErrorMessage("The provided credentials are invalid. Please try again.");
      }
      else if(errorCode ==="auth/wrong-password"){
        setErrorMessage("The password is incorrect. Please try again.");
      }
      else if(errorCode ==="auth/user-not-found"){
        setErrorMessage("The password is incorrect. Please try again");
      }
      else {
        setErrorMessage("An error occurred. Please try again.");
      }
    })
    }
    return (
        <div>
      <div className="min-h-screen flex justify-center items-center my-20">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10">
          <h2 className="font-semibold text-2xl text-center text-[#0B255C]  mt-5">
            Login Your Account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
             {
              errorMessage && <p className="p-2 mt-2 bg-red-600 text-yellow-400">{errorMessage}</p>
              }
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-[#0B255C] font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-cyan-400 font-bold bg-[#0B255C]">
                Login
              </button>
            </div>
          </form>
          <button className="btn text-blue-700 bg-blue-200 "><FaGoogle></FaGoogle> Login With Google</button>
          <p className="text-center text-gray-500 font-semibold my-6">Don't Have a account? <Link className="text-[#0B255C]" to="/register">Register</Link> </p>
        </div>
      </div>
    </div>
    );
};

export default Login;