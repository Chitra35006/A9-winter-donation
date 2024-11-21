import React from 'react';
import DonationCampPlace from './DonationCampPlace';
import image from "../assets/close.jpg"
const NoDataFound = () => {
    return (
        <div>
           <DonationCampPlace></DonationCampPlace> 
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Campaigns Currently Unavailable!</h1>
      <p className="py-6">
      Due to unforeseen circumstances or strategic adjustments, our city campaigns are currently on hold. We're actively working behind the scenes to refine our approach and ensure that when these campaigns relaunch, they deliver the impact and value you expect. Stay tuned for updates as we continue to make progress, and thank you for your patience and support
      </p>

    </div>
  </div>
</div>
        </div>
    );
};

export default NoDataFound;