"use client";

import React from "react";
import Link from "next/link";
import {
  Eye,
  Users,
  MapPin,
  Calendar,
  CreditCard,
  AlertTriangle,
} from "lucide-react";

export default function Page({ params }) {
  const { id } = params;

  // Sample property data (in a real app, this would come from a database)
  const property = {
    id: id,
    name: "Downtown Apartment",
    type: "2 bedroom",
    maxCapacity: 4,
    regularPrice: 24000,
    discount: 2000,
    image: "/house-1.jpg",
    description:
      "Beautiful downtown apartment with modern amenities. Located in the heart of the city with easy access to public transportation, shopping centers, and restaurants.",
    address: "123 Main Street, Nairobi, Kenya",
  };

  // Sample rent arrears data
  const rentArrears = 15000;

  // Sample earnings data for current month
  const currentMonthEarnings = {
    month: "August 2025",
    totalCollected: 22500,
    pending: 1500,
    totalExpected: 24000,
  };

  // Sample empty units data
  const emptyUnits = [
    { id: 101, name: "Unit 101", type: "Single Room" },
    { id: 102, name: "Unit 102", type: "Bedsitter" },
  ];

  // Sample tenants data
  const tenants = [
    {
      id: 1,
      name: "John Smith",
      unit: "Unit 201",
      rent: 8000,
      arrears: 0,
      lastPayment: "2025-08-01",
      status: "paid",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      unit: "Unit 202",
      rent: 7500,
      arrears: 5000,
      lastPayment: "2025-07-15",
      status: "arrears",
    },
    {
      id: 3,
      name: "Michael Brown",
      unit: "Unit 203",
      rent: 8500,
      arrears: 0,
      lastPayment: "2025-08-05",
      status: "paid",
    },
  ];

  // Function to send reminder to all tenants
  const sendReminderToAll = () => {
    alert("Reminder sent to all tenants with arrears");
  };

  // Function to send reminder to a specific tenant
  const sendReminderToTenant = (tenantName) => {
    alert(`Reminder sent to ${tenantName}`);
  };

  // State for image error handling (client-only UI pattern)
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl text-secondary-900 font-medium">
          {property.name}
        </h1>
        <Link
          href="/dashboard/properties"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
        >
          <Eye className="h-5 w-5" />
          <span>View All Properties</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Property Image and Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-secondary-200 overflow-hidden">
            {property.image && !imageError ? (
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-96 object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-96 bg-secondary-100 flex items-center justify-center">
                <span className="text-secondary-500">No image available</span>
              </div>
            )}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-900">
              Property Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-secondary-600" />
                <span>{property.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-secondary-600" />
                <span>
                  For up to{" "}
                  <span className="font-bold">{property.maxCapacity}</span>{" "}
                  guests
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-secondary-600" />
                <span className="capitalize">{property.type}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-secondary-600" />
                <span>
                  KSh{property.regularPrice - property.discount}{" "}
                  <span className="line-through text-secondary-600">
                    KSh{property.regularPrice}
                  </span>{" "}
                  / month
                </span>
              </div>
            </div>
            <p className="mt-4 text-secondary-700">{property.description}</p>
          </div>
        </div>

        {/* Rent Arrears Summary */}
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-red-200">
            <h2 className="text-2xl font-semibold mb-4 text-red-800 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Rent Arrears
            </h2>
            <p className="text-4xl font-bold text-red-700">KSh{rentArrears}</p>
            <p className="text-red-600 mt-2">Total outstanding payments</p>
            <button
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              onClick={sendReminderToAll}
            >
              Send Reminder to All
            </button>
          </div>

          {/* Current Month Earnings */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-900">
              {currentMonthEarnings.month} Earnings
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Collected:</span>
                <span className="font-semibold text-green-600">
                  KSh{currentMonthEarnings.totalCollected}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Pending:</span>
                <span className="font-semibold text-orange-600">
                  KSh{currentMonthEarnings.pending}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-secondary-200">
                <span>Total Expected:</span>
                <span className="font-semibold">
                  KSh{currentMonthEarnings.totalExpected}
                </span>
              </div>
            </div>
          </div>

          {/* Empty Units */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
            <h2 className="text-2xl font-semibold mb-4 text-secondary-900">
              Empty Units ({emptyUnits.length})
            </h2>
            {emptyUnits.length > 0 ? (
              <ul className="space-y-2">
                {emptyUnits.map((unit) => (
                  <li
                    key={unit.id}
                    className="flex justify-between py-2 border-b border-secondary-100"
                  >
                    <span>{unit.name}</span>
                    <span className="text-secondary-600">{unit.type}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-secondary-600">No empty units</p>
            )}
          </div>
        </div>
      </div>

      {/* Tenants Table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
        <h2 className="text-2xl font-semibold mb-6 text-secondary-900">
          Tenants
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-secondary-300">
                <th className="py-2 px-4 text-left">Tenant</th>
                <th className="py-2 px-4 text-left">Unit</th>
                <th className="py-2 px-4 text-left">Rent</th>
                <th className="py-2 px-4 text-left">Arrears</th>
                <th className="py-2 px-4 text-left">Last Payment</th>
                <th className="py-2 px-4 text-left">Status</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {tenants.map((tenant) => (
                <tr
                  key={tenant.id}
                  className="border-b border-secondary-300 hover:bg-blue-50"
                >
                  <td className="py-2 px-4">{tenant.name}</td>
                  <td className="py-2 px-4">{tenant.unit}</td>
                  <td className="py-2 px-4">KSh{tenant.rent}</td>
                  <td className="py-2 px-4">
                    {tenant.arrears > 0 ? (
                      <span className="text-red-600 font-semibold">
                        KSh{tenant.arrears}
                      </span>
                    ) : (
                      <span className="text-green-600">None</span>
                    )}
                  </td>
                  <td className="py-2 px-4">{tenant.lastPayment}</td>
                  <td className="py-2 px-4">
                    {tenant.status === "arrears" ? (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                        In Arrears
                      </span>
                    ) : (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Paid
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {tenant.arrears > 0 && (
                      <button
                        className="text-blue-600 hover:text-blue-800"
                        onClick={() => sendReminderToTenant(tenant.name)}
                      >
                        Send Reminder
                      </button>
                    )}
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
