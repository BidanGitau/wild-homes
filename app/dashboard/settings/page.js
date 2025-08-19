export const metadata = {
  title: "Settings",
};

export default function Page() {
  return (
    <div>
      <h1 className="text-4xl mb-8 text-secondary-900 font-medium">Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
            Profile Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-secondary-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                defaultValue="John Property Manager"
              />
            </div>
            <div>
              <label className="block text-secondary-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                defaultValue="john@propertymanager.com"
              />
            </div>
            <div>
              <label className="block text-secondary-700 mb-2">Phone</label>
              <input
                type="tel"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                defaultValue="+1 (555) 123-4567"
              />
            </div>
            <button className="bg-blue-500 px-6 py-3 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm mt-4">
              Update Profile
            </button>
          </div>
        </div>

        {/* Management Settings */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
            Management Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-secondary-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                defaultValue="Property Management Co."
              />
            </div>
            <div>
              <label className="block text-secondary-700 mb-2">
                Default Rent Due Date
              </label>
              <select className="w-full p-3 border border-secondary-300 rounded-lg bg-white">
                <option>1st of Month</option>
                <option>5th of Month</option>
                <option>10th of Month</option>
                <option>15th of Month</option>
              </select>
            </div>
            <div>
              <label className="block text-secondary-700 mb-2">
                Late Fee Percentage
              </label>
              <input
                type="number"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                defaultValue="5"
              />
            </div>
            <button className="bg-blue-500 px-6 py-3 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm mt-4">
              Update Settings
            </button>
          </div>
        </div>

        {/* Add Management Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
            Add New Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-secondary-700 mb-2">
                Management Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                placeholder="Enter management name"
              />
            </div>
            <div>
              <label className="block text-secondary-700 mb-2">
                Manager Email
              </label>
              <input
                type="email"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                placeholder="Enter manager email"
              />
            </div>
            <div>
              <label className="block text-secondary-700 mb-2">
                Properties Managed
              </label>
              <input
                type="number"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                placeholder="Number of properties"
              />
            </div>
            <div>
              <label className="block text-secondary-700 mb-2">
                Commission Rate
              </label>
              <input
                type="number"
                className="w-full p-3 border border-secondary-300 rounded-lg bg-white"
                placeholder="Commission percentage"
              />
            </div>
          </div>
          <button className="bg-blue-500 px-6 py-3 text-primary-50 font-semibold hover:bg-blue-600 transition-all rounded-lg shadow-sm mt-6">
            Add Management
          </button>
        </div>
      </div>
    </div>
  );
}
