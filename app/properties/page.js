import HouseCard from "@/app/_components/HouseCard";

export const metadata = {
  title: "Properties",
};

export default function Page() {
  // Sample house data
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
  ];

  return (
    <div>
      <h1 className="text-4xl mb-5 text-secondary-900 font-medium">
        Our Rental Properties
      </h1>
      <p className="text-secondary-700 text-lg mb-10">
        Explore our selection of rental properties. Each property is carefully
        managed to provide the best experience for both property owners and
        tenants. Browse through our listings to find the perfect rental for your
        needs.
      </p>

      {properties.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {properties.map((property) => (
            <HouseCard property={property} key={property.id} />
          ))}
        </div>
      )}
    </div>
  );
}
