import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';

const DonationCampPlace = () => {
    const[divisions,setDivision] = useState([]);
    useEffect(()=>{
        fetch('/division.json')
        .then(res => res.json())
        .then((data) =>setDivision(data))
    },[])
    return (
        <div className='mt-32 mb-20 flex justify-center items-center'>
            <ul className="flex flex-wrap gap-4">
          {divisions.map((division) => (
            <NavLink to={`/donationCampP/division/${division.id}`}
              key={division.id}
              className="p-2 border border-gray-200 rounded-lg shadow-sm"
            >
              <span className="text-lg font-medium">{division.name}</span>
            </NavLink>
          ))}
        </ul>
        <Outlet></Outlet>
        </div>
    );
};

export default DonationCampPlace;