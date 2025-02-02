import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import './NavBar.css'
import logo from '../assets/logo2.png'
import { AuthContext } from "../Provider/AuthProvider";

const NavBar = () => {
    const{user,logOut} = useContext(AuthContext);
    const links = <>
        <li><NavLink className={({ isActive }) => isActive ? "active-link" : "inactive-link"} to="/" >Home</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "active-link" : "inactive-link"} to="/donationCampP" >Donation Campaigns</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "active-link" : "inactive-link"} to="/help" >How to Help</NavLink></li>
        <li><NavLink className={({ isActive }) => isActive ? "active-link" : "inactive-link"} to="/dashboard" >Dashboard</NavLink></li>
    </>
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="navbar bg-gradient-to-r from-green-200 via-cyan-300 to-green-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img className="w-10 hidden lg:block" src={logo} /><span className="text-2xl text-green-500">W</span>wizard <span className="ml-2 text-green-700 hidden lg:block"></span>
          </a>
          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end gap-2">
        {
  user && user?.email ? (
    <>
    <img
              className="w-14 h-14 rounded-full object-cover"
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User Pic"
            />
      <button
        className="btn bg-teal-400 hover:bg-cyan-600 font-bold text-blue-900 border-none"
        onClick={logOut}
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <Link
        to="/login"
        className="btn bg-teal-400 hover:bg-cyan-600 font-bold text-blue-900 border-none"
      >
        Login
      </Link>
      {/* Only show Sign Up if the user is not logged in */}
      <Link
        to="/register"
        className="btn bg-teal-400 hover:bg-cyan-600 font-bold text-blue-900 border-none"
      >
        Sign Up
      </Link>
    </>
  )
}

          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
