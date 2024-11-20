import React from "react";
import { IoIosLocate } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaWpforms } from "react-icons/fa6";
import { PiSelectionAllFill } from "react-icons/pi";
import SuportedDivisions from "./SuportedDivisions";
const HowWorks = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="text-center">
        <h2 className="sm:text-2xl text-lg text-center sm:w-3/12 mx-auto font-semibold bg-gradient-to-r from-green-200 via-cyan-300 to-green-200 p-3">
          How it works
        </h2>
        <p className="md:w-8/12 w-10/12 mx-auto my-4 font-medium text-gray-700 sm:text-base text-[10px]">
          Our Winter Donation App makes it easy to donate warm clothes to those
          in need. We have collection points in key locations across Bangladesh,
          covering all 8 divisions: Dhaka, Chattogram, Sylhet, Rajshahi, Khulna,
          Barisal, Rangpur, and Mymensingh. Simply select a campaign, fill out
          the form, and our volunteers will handle the rest!
        </p>
      </div>
      <div>
        <div className="grid grid-col-12 gap-5">
          <div className="col-span-12">
            <h2 className="text-cyan-500 font-bold sm:text-xl text-base">
              About The Donation Process
            </h2>
          </div>
          <div className="grid grid-cols-12 col-span-12 ">
            {/* [card 01] */}
            <div className="md:col-span-4 sm:col-span-6 col-span-12  flex flex-col lg:flex-row gap-4 border border-teal-400">
              {/* Icon Section */}
              <div className="bg-teal-400 px-4 text-lg text-cyan-100 flex items-center justify-center">
                <PiSelectionAllFill className="text-3xl" />
              </div>

              {/* Text Section */}
              <div className="p-4">
                <h2 className="font-bold sm:text-xl text-base mb-2">Choose a Campaign</h2>
                <p className="font-normal text-gray-500 sm:text-xl text-[12px]">
                  Select a donation campaign from the available options. These
                  campaigns are focused on specific areas or communities in need
                  of warm clothing.
                </p>
              </div>
            </div>
            {/* [card 02] */}
            <div className="md:col-span-4 sm:col-span-6 col-span-12  flex flex-col lg:flex-row gap-4 border border-teal-400">
              {/* Icon Section */}
              <div className="bg-teal-400 px-4 text-lg text-cyan-100 flex items-center justify-center">
                <FaWpforms className="text-3xl" />
              </div>

              {/* Text Section */}
              <div className="p-4">
                <h2 className="font-bold sm:text-xl text-base mb-2">Fill Out the Donation Form</h2>
                <p className="font-normal text-gray-500 sm:text-xl text-[12px]">
                Provide essential details about the items you wish to donate. Include the type of clothing (e.g., sweaters, jackets, blankets) and the quantity
                </p>
              </div>
            </div>
            {/* [card 03] */}
            <div className="md:col-span-4 sm:col-span-6 col-span-12  flex flex-col lg:flex-row gap-4 border border-teal-400">
              {/* Icon Section */}
              <div className="bg-teal-400 px-4 text-lg text-cyan-100 flex items-center justify-center">
                <RiCalendarScheduleFill className="text-3xl" />
              </div>

              {/* Text Section */}
              <div className="p-4">
                <h2 className="font-bold sm:text-xl text-base mb-2">Schedule a Pickup</h2>
                <p className="font-normal text-gray-500 sm:text-xl text-[12px]">
                After submitting the form, our volunteers will contact you to arrange a convenient pickup from your provided address.
                </p>
              </div>
            </div>
               {/* [card 04] */}
               <div className="md:col-span-4 sm:col-span-6 col-span-12  flex flex-col lg:flex-row gap-4 border border-teal-400">
              {/* Icon Section */}
              <div className="bg-teal-400 px-4 text-lg text-cyan-100 flex items-center justify-center">
                <IoIosArrowDroprightCircle className="text-3xl" />
              </div>

              {/* Text Section */}
              <div className="p-4">
                <h2 className="font-bold sm:text-xl text-base mb-2">Drop-off Option</h2>
                <p className="font-normal text-gray-500 sm:text-xl text-[12px]">
                If you prefer, you can deliver your donations directly to one of our collection points (details below).
                </p>
              </div>
            </div>
            {/* [card 05] */}
            <div className="md:col-span-4 sm:col-span-6 col-span-12  flex flex-col lg:flex-row gap-4 border border-teal-400">
              {/* Icon Section */}
              <div className="bg-teal-400 px-4 text-lg text-cyan-100 flex items-center justify-center">
                <IoIosLocate className="text-3xl" />
              </div>

              {/* Text Section */}
              <div className="p-4">
                <h2 className="font-bold sm:text-xl text-base mb-2">Track Your Donation</h2>
                <p className="font-normal text-gray-500 sm:text-xl text-[12px]">
                Stay updated about the impact of your donation through the app.
                </p>
              </div>
            </div>
          </div>
        </div>
        <SuportedDivisions></SuportedDivisions>
      </div>
    </div>
  );
};

export default HowWorks;
