import React from 'react';

const winterKits = [
  {
    id: 1,
    name: "Basic Kit",
    price: 100,
    description: "Gloves + Socks",
    image: "https://www.shutterstock.com/image-photo/hats-gloves-mittens-warm-clothes-260nw-1659470128.jpg?text=Basic+Kit", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Essential Kit",
    price: 600,
    description: "Blanket + Jacket",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTrsqRDyGnn204y4JwlNeRgWk5bq7vGQvDGg&s?text=Essential+Kit", // Replace with actual image URL
  },
  {
    id: 3,
    name: "Family Kit",
    price: 2000,
    description: "Clothing for 4 members",
    image: "https://img.freepik.com/premium-photo/family-preparing-winter-emergency-kit-with-essentials-like-blankets-food-medications_1327465-64883.jpg?text=Family+Kit", // Replace with actual image URL
  },
];

const SponsorWinterKit = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="sm:text-3xl text-xl font-semibold text-center text-[#0B255C]  mb-6 bg-gradient-to-r from-green-200 via-cyan-300 to-green-200 lg:w-4/12 w-11/12 p-2 mx-auto">
          Sponsor a Winter Kit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {winterKits.map((kit) => (
            <div
              key={kit.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center"
            >
              <img
                src={kit.image}
                alt={kit.name}
                className="w-full h-32 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {kit.name}
              </h3>
              <p className="text-gray-600 my-2">{kit.description}</p>
              <p className="text-lg font-bold text-gray-900">৳{kit.price}</p>
              <button className="mt-4 px-4 py-2 bg-[#0B255C] text-white rounded-md hover:bg-blue-600 transition">
                Sponsor Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorWinterKit;
