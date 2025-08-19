import RentalCard from "@/app/_components/RentalCard";

export const metadata = {
  title: "Rentals",
};

export default function Page() {
  // Sample rental data for the agent
  const rentals = [
    {
      id: 1,
      guestId: 1,
      startDate: "2025-09-01",
      endDate: "2025-12-01",
      numMonths: 3,
      totalPrice: 7200,
      numTenants: 2,
      status: "confirmed",
      created_at: "2025-08-01",
      properties: {
        name: "Downtown Apartment",
        image: "/house-1.jpg",
      },
    },
    {
      id: 2,
      guestId: 2,
      startDate: "2025-10-01",
      endDate: "2026-04-01",
      numMonths: 6,
      totalPrice: 19200,
      numTenants: 4,
      status: "confirmed",
      created_at: "2025-08-10",
      properties: {
        name: "Suburban House",
        image: "/house-2.jpg",
      },
    },
    {
      id: 3,
      guestId: 3,
      startDate: "2025-08-15",
      endDate: "2026-08-15",
      numMonths: 12,
      totalPrice: 41200,
      numTenants: 4,
      status: "confirmed",
      created_at: "2025-08-01",
      properties: {
        name: "Beachfront Condo",
        image: "/house-3.jpg",
      },
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl text-secondary-900 font-medium">
          Rental Agreements
        </h1>
        <button className="bg-blue-500 px-6 py-3 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm">
          Create New Rental
        </button>
      </div>

      <div className="space-y-6">
        {rentals.map((rental) => (
          <RentalCard booking={rental} key={rental.id} />
        ))}
      </div>
    </div>
  );
}
