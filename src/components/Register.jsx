import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {

  const {setUser,createNewUser,signInWithGoogle} = useContext(AuthContext);

  const [showPassword,setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //get form data
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({name,email,photo,password});

    setErrorMessage('');
    if(password.length < 6){
      setErrorMessage('Must be at least 6 characters long');
      return;
    }
    
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
    if(!passwordRegex.test(password)){
      setErrorMessage('include at least one uppercase and one lowercase letter')
      return;
    }

    //email&password login
    createNewUser(email,password)
    .then(result =>{
      const user = result.user;
      setUser(user);
      console.log(user);
    })
    .catch((err)=>{
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode,errorMessage);
      if (errorCode === "auth/email-already-in-use") {
        setErrorMessage("This email address is already in use. Please try logging in or use a different email for sign up.");
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    })  
  }
  //google sign in
  const handleGoogleSignIn =()=>{
    //sign in with pop up
    signInWithGoogle()
    .then((result) => {
      console.log("User Info:", result.user);
    })
    .catch((err) => {
      console.error("Sign-in Error:", err.message);
    });
    }
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center my-20">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10">
          <h2 className="font-semibold text-2xl text-center text-[#0B255C]  mt-5">
            Register Your Account
          </h2>
          <form onSubmit={handleSubmit} className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Photo Url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo UrL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your Photo UrL"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <button
              onClick={()=>setShowPassword(!showPassword)}
              className="btn btn-xs absolute right-4 top-12">
                {
                  showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
              </button>
              {
              errorMessage && <p className="p-2 mt-2 bg-red-600 text-yellow-400">{errorMessage}</p>
              }
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-cyan-400 font-bold bg-[#0B255C]">
                Sign Up
              </button>
            </div>
          </form>
          <button type="button" onClick={handleGoogleSignIn} className="btn text-blue-700 bg-blue-200 "><FaGoogle></FaGoogle> Login With Google</button>
          <p className="text-center mt-2 text-gray-500 font-semibold">
            Already Registered? Go to 
            <Link className="text-[#0B255C]" to="/auth/login">
               <span className="ml-2">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
