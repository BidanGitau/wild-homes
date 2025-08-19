export const metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-8 text-secondary-900 font-medium">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-900">
            Properties Overview
          </h2>
          <p className="text-secondary-700 mb-4">
            Total properties managed: 12
          </p>
          <p className="text-secondary-700 mb-4">Occupied: 9 (75%)</p>
          <p className="text-secondary-700">Vacant: 3 (25%)</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-900">
            Rent Collection
          </h2>
          <p className="text-secondary-700 mb-4">This month: KSh284,000</p>
          <p className="text-secondary-700 mb-4">Collected: KSh268,000</p>
          <p className="text-secondary-700">Pending: KSh16,000</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-4 text-secondary-900">
            Upcoming Tasks
          </h2>
          <ul className="text-secondary-700 list-disc pl-5 space-y-2">
            <li>3 lease renewals due</li>
            <li>2 maintenance requests</li>
            <li>1 property inspection</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
