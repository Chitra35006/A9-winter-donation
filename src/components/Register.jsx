import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center my-20">
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl p-10">
          <h2 className="font-semibold text-2xl text-center text-[#0B255C]  mt-5">
            Register Your Account
          </h2>
          <form className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
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
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-cyan-400 font-bold bg-[#0B255C]">
                Sign Up
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 font-semibold">
            Already Registered? Go to{" "}
            <Link className="text-[#0B255C]" to="/auth/login">
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
