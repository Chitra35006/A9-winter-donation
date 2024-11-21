import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import DonationCampPlace from './DonationCampPlace';
import NoDataFound from './NoDataFound';

const DivisionPage = () => {
  // Load data from the loader
  const { singleData } = useLoaderData();

  // Handle cases where data is missing or invalid
  if (!singleData || singleData.length === 0) {
    return (
      <div className="">
        <NoDataFound></NoDataFound>
      </div>
    );
  }
   
    return (
        <div className='mt-50 mb-20'>
            <DonationCampPlace></DonationCampPlace>
            <div className="p-6">
      <h1 className="md:text-3xl text-xl font-bold text-center mb-6">Donation Campaign</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {singleData.map((campaignData,index) => (
          <div
          key={`${campaignData.id}-${index}`}
            className="border rounded-lg shadow-md overflow-hidden bg-white"
          >
            <img
              src={campaignData.image}
              alt={campaignData.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-base lg:text-lg font-semibold text-gray-800">
                {campaignData.title}
              </h2>
              <p className="text-gray-600 mt-2">{campaignData.description}</p>
              <p className="text-gray-500 mt-2">
                <strong>Division:</strong> {campaignData.division}
              </p>
              <Link
                to={`/division/${campaignData.u_id}`}
                className="inline-block mt-4 px-4 py-2 bg-[#0B255C] text-white rounded-md  text-sm font-medium hover:bg-blue-600"
              >
                Donate Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
           
        </div>
    );
};

export default DivisionPage;












