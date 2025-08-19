import {
  BarChart,
  PieChart,
  TrendingUp,
  Users,
  Home,
  CreditCard,
} from "lucide-react";

export default function Page() {
  // Sample data for reports
  const rentCollectionData = [
    { month: "Jan", amount: 95000 },
    { month: "Feb", amount: 105000 },
    { month: "Mar", amount: 100000 },
    { month: "Apr", amount: 115000 },
    { month: "May", amount: 108000 },
    { month: "Jun", amount: 112000 },
    { month: "Jul", amount: 120000 },
    { month: "Aug", amount: 109000 },
  ];

  const propertyPerformance = [
    { name: "Downtown Apartment", occupancy: 90, collection: 95 },
    { name: "Suburban House", occupancy: 75, collection: 85 },
    { name: "Beachfront Condo", occupancy: 85, collection: 90 },
    { name: "City Center Loft", occupancy: 95, collection: 98 },
  ];

  const tenantStatus = [
    { status: "Current", count: 45 },
    { status: "Overdue", count: 8 },
    { status: "Vacant", count: 12 },
  ];

  // Get max value for chart scaling
  const maxCollection = Math.max(
    ...rentCollectionData.map((item) => item.amount)
  );

  return (
    <div>
      <h1 className="text-4xl mb-8 text-secondary-900 font-medium">
        Analytics & Reports Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 rounded-full">
              <CreditCard className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-secondary-600">Total Collection</p>
              <p className="text-2xl font-bold">KSh859,000</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-secondary-600">Collection Rate</p>
              <p className="text-2xl font-bold">92%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-full">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-secondary-600">Occupancy Rate</p>
              <p className="text-2xl font-bold">85%</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-100 rounded-full">
              <Home className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <p className="text-secondary-600">Vacant Units</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Rent Collection Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-6 text-secondary-900 flex items-center gap-2">
            <BarChart className="h-6 w-6" />
            Monthly Rent Collection
          </h2>
          <div className="h-64 flex items-end justify-between pt-8 border-b border-l border-secondary-300">
            {/* Chart bars */}
            {rentCollectionData.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-12">
                <div
                  className="w-8 bg-blue-500 rounded-t hover:bg-blue-400 transition-all"
                  style={{ height: `${(item.amount / maxCollection) * 90}%` }}
                ></div>
                <span className="mt-2 text-sm">{item.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Property Performance Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-6 text-secondary-900 flex items-center gap-2">
            <PieChart className="h-6 w-6" />
            Property Performance
          </h2>
          <div className="h-64 flex items-center justify-center">
            <div className="w-full">
              {propertyPerformance.map((property, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{property.name}</span>
                    <span>
                      {property.occupancy}% occupancy, {property.collection}%
                      collection
                    </span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${property.occupancy}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tenant Status and Arrears */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Tenant Status Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
            Tenant Status Distribution
          </h2>
          <div className="h-64 flex items-center justify-center">
            <div className="w-full">
              {tenantStatus.map((status, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{status.status}</span>
                    <span>{status.count} tenants</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2.5">
                    <div
                      className={
                        status.status === "Current"
                          ? "bg-green-600 h-2.5 rounded-full"
                          : status.status === "Overdue"
                          ? "bg-red-600 h-2.5 rounded-full"
                          : "bg-gray-400 h-2.5 rounded-full"
                      }
                      style={{ width: `${(status.count / 65) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customers in Arrears */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
            Customers in Arrears
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
              <div>
                <h3 className="font-semibold">John Smith</h3>
                <p className="text-sm text-gray-600">Downtown Apartment</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-red-600">KSh400</p>
                <p className="text-sm text-gray-600">30 days overdue</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
              <div>
                <h3 className="font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-gray-600">City Center Loft</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-red-600">KSh250</p>
                <p className="text-sm text-gray-600">15 days overdue</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
              <div>
                <h3 className="font-semibold">Michael Brown</h3>
                <p className="text-sm text-gray-600">Suburban House</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-red-600">KSh600</p>
                <p className="text-sm text-gray-600">45 days overdue</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overdue Payments Summary */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
        <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
          Overdue Payments Summary
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-secondary-300">
                <th className="py-2 px-4 text-left">Tenant</th>
                <th className="py-2 px-4 text-left">Property</th>
                <th className="py-2 px-4 text-left">Amount Overdue</th>
                <th className="py-2 px-4 text-left">Days Overdue</th>
                <th className="py-2 px-4 text-left">Last Payment</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-secondary-300 hover:bg-blue-50">
                <td className="py-2 px-4">John Smith</td>
                <td className="py-2 px-4">Downtown Apartment</td>
                <td className="py-2 px-4 text-red-600 font-semibold">KSh400</td>
                <td className="py-2 px-4">30 days</td>
                <td className="py-2 px-4">2025-07-15</td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:text-blue-800">
                    Send Reminder
                  </button>
                </td>
              </tr>
              <tr className="border-b border-secondary-300 hover:bg-blue-50">
                <td className="py-2 px-4">Sarah Johnson</td>
                <td className="py-2 px-4">City Center Loft</td>
                <td className="py-2 px-4 text-red-600 font-semibold">KSh250</td>
                <td className="py-2 px-4">15 days</td>
                <td className="py-2 px-4">2025-07-30</td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:text-blue-800">
                    Send Reminder
                  </button>
                </td>
              </tr>
              <tr className="border-b border-secondary-300 hover:bg-blue-50">
                <td className="py-2 px-4">Michael Brown</td>
                <td className="py-2 px-4">Suburban House</td>
                <td className="py-2 px-4 text-red-600 font-semibold">KSh600</td>
                <td className="py-2 px-4">45 days</td>
                <td className="py-2 px-4">2025-06-30</td>
                <td className="py-2 px-4">
                  <button className="text-blue-600 hover:text-blue-800">
                    Send Reminder
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
