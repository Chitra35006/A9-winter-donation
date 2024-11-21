import React from 'react';
const divisions = [
    "Dhaka",
    "Chattogram",
    "Sylhet",
    "Rajshahi",
    "Khulna",
    "Barisal",
    "Rangpur",
    "Mymensingh",
  ];
  const bgColors = [
    "bg-red-100", 
    "bg-blue-100",   
    "bg-green-100",
    "bg-yellow-100", 
    "bg-pink-100", 
    "bg-purple-100",
    "bg-orange-100",
    "bg-gray-100", 
  ];
const SuportedDivisions = () => {
    return (
        <div className="w-11/12 mx-auto p-8 bg-cyan-50 my-20">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#0B255C] ">Supported Divisions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {divisions.map((division, index) => (
          <div
            key={index}
            className={`border border-teal-400 p-4 rounded-md shadow-md text-center text-teal-600 ${bgColors[index]}`}
          >
            <h3 className="text-lg font-semibold">{division}</h3>
          </div>
        ))}
      </div>
    </div>
    );
};

export default SuportedDivisions;