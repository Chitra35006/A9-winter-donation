import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link} from "react-router-dom";
import "animate.css";

const UserDashboard = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="w-8/12 mx-auto my-32">
        {/* Welcome Message */}
        <div className="mb-8 text-center">
          <h1 className=" text-gray-800 animate__animated animate__bounce text-center text-xl sm:text-3xl font-bold mt-8">
            Welcome, <span className="text-green-500">{user?.displayName || "Guest"}</span>!
          </h1>
          <p className="text-gray-600">We’re glad to have you here.</p>
        </div>
      
        {/* Main Content */}
        <div className="flex justify-center items-center">
          <div className="mr-4">
            <img
              className="w-24 h-24 rounded-full object-cover"
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt="User Pic"
            />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl">
              Name: <span className="font-medium">{user?.displayName || "N/A"}</span>
            </h2>
            <p className="text-lg">
              Email: <span className="font-medium">{user?.email || "N/A"}</span>
            </p>
            <Link to='/updateProfile' className="btn bg-teal-400 hover:bg-cyan-600 font-bold text-blue-900 border-none">Update Profile</Link>
          </div>
        </div>
        
      </div>
      
    );
};

export default UserDashboard;