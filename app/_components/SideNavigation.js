"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Home,
  Building,
  Users,
  Wrench,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function SideNavigation() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className={`bg-blue-800 h-full flex flex-col transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-12" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      <div className="p-2 border-b border-blue-700">
        <button
          onClick={toggleSidebar}
          className="p-1 hover:bg-blue-700 rounded transition-colors"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4 text-blue-200" />
          ) : (
            <ChevronLeft className="h-4 w-4 text-blue-200" />
          )}
        </button>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 flex flex-col justify-between">
        <ul className="flex flex-col gap-1 p-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center justify-center py-2 px-1 hover:bg-blue-700 transition-colors rounded"
              title="Home"
            >
              <Home className="h-4 w-4 text-blue-200" />
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/properties"
              className="flex items-center justify-center py-2 px-1 hover:bg-blue-700 transition-colors rounded"
              title="Properties"
            >
              <Building className="h-4 w-4 text-blue-200" />
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/rentals"
              className="flex items-center justify-center py-2 px-1 hover:bg-blue-700 transition-colors rounded"
              title="Rentals"
            >
              <Users className="h-4 w-4 text-blue-200" />
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/utility"
              className="flex items-center justify-center py-2 px-1 hover:bg-blue-700 transition-colors rounded"
              title="Utility"
            >
              <Wrench className="h-4 w-4 text-blue-200" />
            </Link>
          </li>
        </ul>

        {/* Settings at Bottom */}
        <div className="p-2 border-t border-blue-700">
          <Link
            href="/dashboard/settings"
            className="flex items-center justify-center py-2 px-1 hover:bg-blue-700 transition-colors rounded"
            title="Settings"
            onClick={(e) => {
              e.preventDefault();
              // Simulate login without actual submission
              console.log("Simulating login for settings...");
              // Hide navigation bar
              document.querySelector(".topbar")?.classList.add("hidden");
            }}
          >
            <Settings className="h-4 w-4 text-blue-200" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
