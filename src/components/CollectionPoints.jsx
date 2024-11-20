const divisionData = [
    {
      division: "Dhaka Division",
      locations: [
        "Gulshan Community Center",
        "Dhanmondi Road 32, Near Rabindra Sharobar",
        "Uttara Sector 7 Park",
      ],
    },
    {
      division: "Chattogram Division",
      locations: ["GEC Circle Collection Booth", "Agrabad Community Hall"],
    },
    {
      division: "Sylhet Division",
      locations: [
        "Shahjalal University Campus",
        "Zindabazar Central Library",
      ],
    },
    {
      division: "Rajshahi Division",
      locations: [
        "Rajshahi University Campus",
        "Shaheb Bazar Road",
      ],
    },
    {
      division: "Khulna Division",
      locations: [
        "Khalishpur Community Center",
        "Jessore Town Hall",
      ],
    },
    {
      division: "Barisal Division",
      locations: ["Barisal Sadar Community Hall"],
    },
    {
      division: "Rangpur Division",
      locations: ["Rangpur Town Hall"],
    },
    {
      division: "Mymensingh Division",
      locations: ["Mymensingh Railway Station Collection Booth"],
    },
  ];
const CollectionPoints = () => {
    return (
        <div className="w-11/12 mx-auto py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-[#0B255C] ">
        Collection Points
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {divisionData.map((division, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg shadow-md bg-teal-50"
          >
            <h3 className="text-lg font-bold text-teal-600 mb-3">
              {division.division}
            </h3>
            <ul className="text-gray-600 space-y-2">
              {division.locations.map((location, i) => (
                <li key={i} className="text-sm">
                  • {location}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    );
};

export default CollectionPoints;