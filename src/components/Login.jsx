import React from 'react';
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
const Login = () => {
    return (
        <div>
      <div className="min-h-screen flex justify-center items-center my-20">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10">
          <h2 className="font-semibold text-2xl text-center text-[#0B255C]  mt-5">
            Login Your Account
          </h2>
          <form className="card-body">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
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
          <p className="text-center text-gray-500 font-semibold my-6">Don't Have a account? <Link className="text-[#0B255C]" to="/auth/register">Register</Link> </p>
        </div>
      </div>
    </div>
    );
};

export default Login;