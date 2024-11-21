import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaCalendar } from "react-icons/fa";
import { FaChartArea } from "react-icons/fa";
import { CiBookmarkPlus } from "react-icons/ci";
import { FaGift } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoMdContact } from "react-icons/io";
import { GrStatusUnknownSmall } from "react-icons/gr";


const ShowDetails = () => {

    const singleData = useLoaderData();
    const data = singleData.singleData;
    console.log(data);

    return (
        <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden border my-20">
        <img
          className="w-full h-56 object-cover"
          src={data?.image}
          alt={data?.title}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#0B255C]">{data?.title}</h2>
          <p className="text-sm text-cyan-500 mb-4">{data?.division}</p>
          <p className="text-gray-700 mb-4">{data?.description}</p>
          <div className="mb-4">
            <p className='inline-flex items-center'>
            <GrStatusUnknownSmall className='mr-2 text-[#0B255C]'></GrStatusUnknownSmall>
              <span className="font-bold mr-2">Status: </span>{data?.status}
            </p>
            <p className='inline-flex items-center'>
                <IoMdContact className='mr-2 text-[#0B255C]'></IoMdContact>
              <span className="font-bold mr-2">Contact:</span> {data?.contactInfo}
            </p>
          </div>
          <div className="mb-4 space-x-4">
            <p className='inline-flex items-center'>
                <IoIosPeople className='mr-2 text-cyan-500'></IoIosPeople>
              <span className="font-bold mr-2">Donors:</span> {data?.donors}
            </p>
            <p className='inline-flex items-center '>
                <FaGift className='mr-2 text-cyan-500'></FaGift>
              <span className="font-bold mr-2">Kits Distributed:</span> {data?.kitsDistributed}
            </p>
            <p className='inline-flex items-center'>
                <CiBookmarkPlus className='mr-2 text-cyan-500'></CiBookmarkPlus>
              <span className="font-bold mr-2">Beneficiaries:</span> {data?.beneficiaries}
            </p>
          </div>
          <div className="mb-4">
            <p className="font-bold inline-flex items-center">
                <FaChartArea className='mr-2 text-[#0B255C]'
                ></FaChartArea>
                Priority Areas:</p>
            <ul className="list-disc ml-5 text-gray-700">
              {data?.priorityAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-gray-600 inline-flex items-center">
            <FaCalendar className='mr-2 text-cyan-500'></FaCalendar>
            <span className="font-bold mr-2">Program Duration:</span>{' '}
            {data.programStartDate} to {data.programEndDate}
          </p>
        </div>
      </div>
    );
};

export default ShowDetails;