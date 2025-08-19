import RentalCard from "@/app/_components/RentalCard";

export const metadata = {
  title: "Rentals",
};

export default function Page() {
  // Sample rental data
  const bookings = [
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
      guestId: 1,
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
  ];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-secondary-900 mb-7">
        Your rentals
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no rentals yet. Check out our{" "}
          <a className="underline text-blue-600" href="/properties">
            rental properties &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <RentalCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
