import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext); // Access current user
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the previous route
  const from = location.state?.from?.pathname || "/dashboard"; // Default to dashboard

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    if (!name || !photoURL) {
      setMessage("Please provide both name and photo URL.");
      return;
    }

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photoURL }); // Update context
        setMessage("Profile updated successfully!");

        // Navigate to the previous route
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1500); // Adding a slight delay for UX
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        setMessage("Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="w-8/12 mx-auto my-20">
      <h1 className="text-2xl font-bold text-center mb-6">Update Profile</h1>
      {message && <p className="text-center text-red-500 mb-4">{message}</p>}
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your new name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Profile Photo URL</label>
          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter your new photo URL"
            className="input input-bordered w-full"
          />
        </div>
        <button type="submit" className="btn bg-[#0B255C] text-white w-full">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
