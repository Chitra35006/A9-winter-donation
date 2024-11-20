

const Donor = () => {
    return (
        <div className="my-20">
            <h2 className="sm:text-3xl text-xl font-semibold text-center text-[#0B255C]  mb-6 bg-gradient-to-r from-green-200 via-cyan-300 to-green-200 lg:w-4/12 w-11/12 p-2 mx-auto">
          Purchase a Package
        </h2>
        <div className="grid grid-cols-12 gap-4 w-8/12 mx-auto">
            <div className="md:col-span-4 col-span-12  border-r-8 border-orange-600 p-4 flex flex-col justify-center items-center">
                <div className="bg-orange-200 w-28 h-28 rounded-badge p-4 border-4 border-orange-500 ">
                <h2 className="text-center text-bold">Badge <span className="text-orange-500 font-bold">Bronze</span></h2>
                <p className="text-center"><span className="text-black font-extrabold">৳ </span>1000</p>
                </div>
                
                <button className="mt-4 px-4 py-2 bg-[#0B255C] text-white rounded-md hover:bg-blue-600 transition">
                Purchase Now
              </button>
            </div>
            <div className="md:col-span-4 col-span-12  border-r-8 border-slate-600 p-4 flex flex-col justify-center items-center">
                <div className="bg-slate-200 w-28 h-28 rounded-badge p-4 border-4 border-slate-500 ">
                <h2 className="text-center text-bold">Badge <span className="text-slate-500 font-bold">Silver</span></h2>
                <p className="text-center"><span className="text-black font-extrabold">৳ </span>2500</p>
                </div>
                
                <button className="mt-4 px-4 py-2 bg-[#0B255C] text-white rounded-md hover:bg-blue-600 transition">
                Purchase Now
              </button>
            </div>
            <div className="md:col-span-4 col-span-12  border-r-8 border-yellow-600 p-4 flex flex-col justify-center items-center">
                <div className="bg-yellow-200 w-28 h-28 rounded-badge p-4 border-4 border-yellow-500 ">
                <h2 className="text-center text-bold">Badge <span className="text-yellow-500 font-bold">Golden</span></h2>
                <p className="text-center"><span className="text-black font-extrabold">৳ </span>2500</p>
                </div>
                
                <button className="mt-4 px-4 py-2 bg-[#0B255C] text-white rounded-md hover:bg-blue-600 transition">
                Purchase Now
              </button>
            </div>
        </div>
        </div>
    );
};

export default Donor;