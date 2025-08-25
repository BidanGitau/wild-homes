import {
  BarChart,
  PieChart,
  TrendingUp,
  Users,
  Home,
  CreditCard,
  DollarSign,
  Building,
  Calendar,
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

  // Current month earnings data for pie chart
  const currentMonthEarnings = [
    { category: "Downtown Apartments", amount: 45000, color: "#3B82F6" },
    { category: "Suburban Houses", amount: 32000, color: "#10B981" },
    { category: "Beachfront Condos", amount: 28000, color: "#F59E0B" },
    { category: "City Center Lofts", amount: 15000, color: "#EF4444" },
  ];

  // Agent managed properties
  const agentProperties = [
    {
      id: 1,
      name: "Modern Downtown Apartment",
      address: "123 Main St, Downtown",
      price: 45000,
      status: "Occupied",
      tenant: "John Smith",
      image: "/rental.jpg",
    },
    {
      id: 2,
      name: "Suburban Family House",
      address: "456 Oak Ave, Suburbs",
      price: 32000,
      status: "Vacant",
      tenant: null,
      image: "/home.jpg",
    },
    {
      id: 3,
      name: "Beachfront Luxury Condo",
      address: "789 Beach Rd, Coastal",
      price: 28000,
      status: "Occupied",
      tenant: "Sarah Johnson",
      image: "/rental.jpg",
    },
  ];

  // Get max value for chart scaling
  const maxCollection = Math.max(
    ...rentCollectionData.map((item) => item.amount)
  );

  const totalEarnings = currentMonthEarnings.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <div>
      <h1 className="text-4xl mb-8 text-secondary-900 font-medium">
        Dashboard
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
            <div className="p-3 bg-yellow-100 rounded-full">
              <DollarSign className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-secondary-600">Current Month</p>
              <p className="text-2xl font-bold">
                KSh{totalEarnings.toLocaleString()}
              </p>
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

        {/* Current Month Earnings Pie Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-6 text-secondary-900 flex items-center gap-2">
            <PieChart className="h-6 w-6" />
            Current Month Earnings
          </h2>
          <div className="h-64 flex items-center justify-center">
            <div className="relative w-48 h-48">
              {/* Simple pie chart representation */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {currentMonthEarnings.map((item, index) => {
                  const startAngle =
                    index === 0
                      ? 0
                      : (currentMonthEarnings
                          .slice(0, index)
                          .reduce((sum, prev) => sum + prev.amount, 0) /
                          totalEarnings) *
                        360;
                  const endAngle =
                    startAngle + (item.amount / totalEarnings) * 360;
                  const x1 =
                    50 + 40 * Math.cos(((startAngle - 90) * Math.PI) / 180);
                  const y1 =
                    50 + 40 * Math.sin(((startAngle - 90) * Math.PI) / 180);
                  const x2 =
                    50 + 40 * Math.cos(((endAngle - 90) * Math.PI) / 180);
                  const y2 =
                    50 + 40 * Math.sin(((endAngle - 90) * Math.PI) / 180);
                  const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;

                  return (
                    <path
                      key={index}
                      d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={item.color}
                      className="hover:opacity-80 transition-opacity"
                    />
                  );
                })}
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-2xl font-bold">
                    {totalEarnings.toLocaleString()}
                  </p>
                  <p className="text-sm text-secondary-600">KSh Total</p>
                </div>
              </div>
            </div>
            <div className="ml-4">
              {currentMonthEarnings.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm">
                    {item.category}: KSh{item.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Agent Property Listings */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-secondary-900 flex items-center gap-2">
          <Building className="h-6 w-6" />
          Properties You Manage
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agentProperties.map((property) => (
            <div
              key={property.id}
              className="border border-secondary-200 rounded-lg overflow-hidden"
            >
              <div className="h-32 bg-secondary-200 flex items-center justify-center">
                <Home className="h-16 w-16 text-secondary-400" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
                <p className="text-sm text-secondary-600 mb-2">
                  {property.address}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">
                    KSh{property.price.toLocaleString()}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      property.status === "Occupied"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {property.status}
                  </span>
                </div>
                {property.tenant && (
                  <p className="text-sm text-secondary-600 mt-1">
                    Tenant: {property.tenant}
                  </p>
                )}
              </div>
            </div>
          ))}
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
