import HouseCard from "@/app/_components/HouseCard";

export default function Page() {
  // Sample house data for the agent
  const properties = [
    {
      id: 1,
      name: "Downtown Apartment",
      maxCapacity: 4,
      regularPrice: 2400,
      discount: 200,
      image: "/house-1.jpg",
      type: "2 bedroom",
    },
    {
      id: 2,
      name: "Suburban House",
      maxCapacity: 6,
      regularPrice: 3200,
      discount: 0,
      image: "/house-2.jpg",
      type: "3 bedroom",
    },
    {
      id: 3,
      name: "Beachfront Condo",
      maxCapacity: 4,
      regularPrice: 3800,
      discount: 300,
      image: "/house-3.jpg",
      type: "1 bedroom",
    },
    {
      id: 4,
      name: "City Center Loft",
      maxCapacity: 2,
      regularPrice: 1800,
      discount: 100,
      image: "/house-4.jpg",
      type: "studio",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl text-secondary-900 font-medium">
          My Properties
        </h1>
        <button className="bg-blue-500 px-6 py-3 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm">
          Add New Property
        </button>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
        {properties.map((property) => (
          <HouseCard property={property} key={property.id} />
        ))}
      </div>
    </div>
  );
}
