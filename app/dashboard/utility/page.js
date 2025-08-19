import { Filter, Wrench, Calendar, User, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Utility Management",
};

export default function Page() {
  // Sample maintenance data
  const maintenanceRequests = [
    {
      id: 1,
      title: "Leaky Faucet",
      property: "Downtown Apartment",
      unit: "Unit 2B",
      status: "In Progress",
      priority: "High",
      assignedTo: "Plumbing Plus",
      reportedDate: "2025-08-10",
      completedDate: null,
      description: "Kitchen sink faucet is leaking and needs repair.",
    },
    {
      id: 2,
      title: "AC Not Cooling",
      property: "Suburban House",
      unit: "Main Unit",
      status: "Completed",
      priority: "Medium",
      assignedTo: "Cool Air Services",
      reportedDate: "2025-08-05",
      completedDate: "2025-08-08",
      description: "Air conditioning unit is not cooling properly.",
    },
    {
      id: 3,
      title: "Broken Door Lock",
      property: "Beachfront Condo",
      unit: "Unit 101",
      status: "Pending",
      priority: "High",
      assignedTo: null,
      reportedDate: "2025-08-12",
      completedDate: null,
      description: "Main entrance door lock is broken and needs replacement.",
    },
    {
      id: 4,
      title: "Electrical Outlet Issue",
      property: "Downtown Apartment",
      unit: "Unit 3A",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Electric Masters",
      reportedDate: "2025-08-09",
      completedDate: null,
      description: "Bathroom outlet is not working and sparks when plugged in.",
    },
    {
      id: 5,
      title: "Leaky Roof",
      property: "Suburban House",
      unit: "Main Unit",
      status: "Pending",
      priority: "High",
      assignedTo: null,
      reportedDate: "2025-08-11",
      completedDate: null,
      description: "Roof is leaking in the living room during heavy rains.",
    },
  ];

  // Sample properties for filtering
  const properties = [
    { id: 1, name: "Downtown Apartment" },
    { id: 2, name: "Suburban House" },
    { id: 3, name: "Beachfront Condo" },
    { id: 4, name: "City Center Loft" },
  ];

  // Function to get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Pending":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Function to get priority color
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div>
      <h1 className="text-4xl mb-8 text-secondary-900 font-medium">
        Utility Management
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Utility Providers */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-secondary-900">
              Utility Providers
            </h2>
            <button className="bg-blue-500 px-4 py-2 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm">
              Add Provider
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-secondary-300">
              <div>
                <h3 className="font-semibold">City Water Services</h3>
                <p className="text-sm text-gray-600">Water supply</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">KSh12,000/month</p>
                <p className="text-sm text-gray-600">Next billing: Aug 15</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-secondary-300">
              <div>
                <h3 className="font-semibold">Metro Electric</h3>
                <p className="text-sm text-gray-600">Electricity</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">KSh8,500/month</p>
                <p className="text-sm text-gray-600">Next billing: Aug 10</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-secondary-300">
              <div>
                <h3 className="font-semibold">Broadband Unlimited</h3>
                <p className="text-sm text-gray-600">Internet</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">KSh6,500/month</p>
                <p className="text-sm text-gray-600">Next billing: Aug 20</p>
              </div>
            </div>
          </div>
        </div>

        {/* Maintenance Requests Summary */}
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              Maintenance Summary
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-red-600">3</p>
                <p className="text-secondary-600">Pending</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-yellow-600">2</p>
                <p className="text-secondary-600">In Progress</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">1</p>
                <p className="text-secondary-600">Completed</p>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
            <h2 className="text-2xl font-semibold mb-6 text-secondary-900 flex items-center gap-2">
              <Filter className="h-6 w-6" />
              Filter Maintenance Requests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-secondary-700 mb-2">
                  Property
                </label>
                <select className="w-full p-2 border border-secondary-300 rounded-lg bg-white">
                  <option>All Properties</option>
                  {properties.map((property) => (
                    <option key={property.id} value={property.id}>
                      {property.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-secondary-700 mb-2">Status</label>
                <select className="w-full p-2 border border-secondary-300 rounded-lg bg-white">
                  <option>All Statuses</option>
                  <option>Pending</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              </div>
              <div>
                <label className="block text-secondary-700 mb-2">
                  Priority
                </label>
                <select className="w-full p-2 border border-secondary-300 rounded-lg bg-white">
                  <option>All Priorities</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="bg-secondary-700 px-4 py-2 text-primary-50 font-semibold hover:bg-secondary-600 transition-all rounded-lg">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Maintenance Requests Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 mt-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-secondary-900">
            Maintenance Requests
          </h2>
          <button className="bg-blue-500 px-4 py-2 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            <span>New Request</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-secondary-300">
                <th className="py-2 px-4 text-left">Request</th>
                <th className="py-2 px-4 text-left">Property</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Priority</th>
                <th className="py-2 px-4 text-left">Assigned To</th>
                <th className="py-2 px-4 text-left">Reported</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceRequests.map((request) => (
                <tr
                  key={request.id}
                  className="border-b border-secondary-300 hover:bg-blue-50"
                >
                  <td className="py-4 px-4">
                    <div className="font-semibold">{request.title}</div>
                    <div className="text-sm text-secondary-600">
                      {request.unit}
                    </div>
                  </td>
                  <td className="py-4 px-4">{request.property}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
                        request.status
                      )}`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(
                        request.priority
                      )}`}
                    >
                      {request.priority}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    {request.assignedTo || (
                      <span className="text-secondary-500">Not assigned</span>
                    )}
                  </td>
                  <td className="py-4 px-4">{request.reportedDate}</td>
                  <td className="py-4 px-4">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center gap-1">
                      <Wrench className="h-4 w-4" />
                      <span>View Details</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Utility Provider Form */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 mt-8">
        <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
          Add New Utility Provider
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-secondary-700 mb-2">
              Provider Name
            </label>
            <input
              type="text"
              className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
              placeholder="Enter provider name"
            />
          </div>
          <div>
            <label className="block text-secondary-700 mb-2">
              Service Type
            </label>
            <select className="w-full p-3 border border-secondary-300 rounded-lg bg-white">
              <option>Water</option>
              <option>Electricity</option>
              <option>Gas</option>
              <option>Internet</option>
              <option>Cable</option>
              <option>Trash</option>
            </select>
          </div>
          <div>
            <label className="block text-secondary-700 mb-2">
              Monthly Cost
            </label>
            <input
              type="number"
              className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
              placeholder="Enter monthly cost"
            />
          </div>
          <div>
            <label className="block text-secondary-700 mb-2">
              Billing Date
            </label>
            <input
              type="date"
              className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-secondary-700 mb-2">Notes</label>
            <textarea
              className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
              rows="3"
              placeholder="Additional notes about this utility provider"
            ></textarea>
          </div>
        </div>
        <button className="bg-blue-500 px-6 py-3 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm mt-6">
          Add Utility Provider
        </button>
      </div>
    </div>
  );
}
