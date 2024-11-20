import React from 'react';
import img1 from '../assets/aboutUsImg.jpg'
const About = () => {
    return (
        <div className='w-11/12 mx-auto sm:mt-[300px] '>
            <h2 className='sm:text-2xl text-lg text-center sm:w-3/12 mx-auto font-semibold bg-gradient-to-r from-green-200 via-cyan-300 to-green-200 p-3'>About Us</h2>
            <div className='grid gap-4 grid-cols-12 my-10 bg-gray-100 p-4 shadow-md  outline-dashed outline-gray-300'>
                <div className='col-span-12 sm:col-span-12 lg:col-span-4 '>
                <img className='py-5' src={img1} alt="" />
                </div>
                <div className='col-span-12 lg:col-span-8 sm:col-span-12 space-y-2 p-4'>
                <h2 className='font-semibold sm:text-[#0B255C] text-[12px] sm:text-2xl'>Our Mission</h2>
                <p className='text-gray-600 sm:text-lg text-[10px]'>We are collecting dress from the donors and giving this  to those vulnerable people, especially in rural and low-income areas, 
                struggle to stay warm because they don’t have enough warm clothing.Our mission to spread love with each another so that no one live hardly in this winter for lacking of warm clothes</p>
                 <h2 className='font-semibold sm:text-[#0B255C] text-[12px] sm:text-2xl'>How User can Contribute ?</h2>
                 <p className='text-gray-600 sm:text-lg text-[10px]'>A user can donate warm clothes for needy people. The user has to select an item in the donation campaign route and fill out a form. Our volunteer will collect the clothes from the address provided by the user</p>
                </div>
            </div>
        </div>
    );
};

export default About;