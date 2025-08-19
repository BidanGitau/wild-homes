import { Filter, Wrench, Calendar, User, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Maintenance Management",
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
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl text-secondary-900 font-medium">
          Maintenance Management
        </h1>
        <button className="bg-blue-500 px-6 py-3 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm flex items-center gap-2">
          <Wrench className="h-5 w-5" />
          <span>New Request</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 mb-8">
        <h2 className="text-2xl font-semibold mb-6 text-secondary-900 flex items-center gap-2">
          <Filter className="h-6 w-6" />
          Filter Maintenance Requests
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-secondary-700 mb-2">Property</label>
            <select className="w-full p-3 border border-secondary-300 rounded-lg bg-white">
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
            <select className="w-full p-3 border border-secondary-300 rounded-lg bg-white">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>
          </div>
          <div>
            <label className="block text-secondary-700 mb-2">Priority</label>
            <select className="w-full p-3 border border-secondary-300 rounded-lg bg-white">
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

      {/* Maintenance Requests Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            Pending Requests
          </h3>
          <p className="text-3xl font-bold text-red-600">3</p>
          <p className="text-secondary-600">Requests awaiting action</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            In Progress
          </h3>
          <p className="text-3xl font-bold text-yellow-600">2</p>
          <p className="text-secondary-600">Requests being worked on</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h3 className="text-lg font-semibold text-secondary-900 mb-2">
            Completed This Month
          </h3>
          <p className="text-3xl font-bold text-green-600">1</p>
          <p className="text-secondary-600">Requests finished</p>
        </div>
      </div>

      {/* Maintenance Requests Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
        <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
          Maintenance Requests
        </h2>
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
    </div>
  );
}
