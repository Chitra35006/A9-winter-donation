import React from 'react';
import image from "../assets/warning.webp"
import { Link} from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";

const Four04Page = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center my-20'>
            <div>
            <img className='w-[400px]' src={image} alt="" />
            </div>
            <div>
            <Link to='/' className="btn bg-teal-400 hover:bg-blue-600 hover:text-white font-bold text-blue-900 border-none"> <span><IoMdArrowRoundBack /></span> Home</Link>
            </div>
        </div>
    );
};

export default Four04Page;