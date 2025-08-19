import Link from "next/link";
import {
  Home,
  Building,
  Users,
  Wrench,
  BarChart,
  Settings,
} from "lucide-react";

export default function SideNavigation() {
  return (
    <nav className="border-r border-secondary-200 h-full">
      <ul className="flex flex-col gap-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center gap-4 py-3 px-5 hover:bg-secondary-100 transition-colors rounded-lg"
          >
            <Home className="h-6 w-6 text-secondary-600" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/properties"
            className="flex items-center gap-4 py-3 px-5 hover:bg-secondary-100 transition-colors rounded-lg"
          >
            <Building className="h-6 w-6 text-secondary-600" />
            <span>Properties</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/rentals"
            className="flex items-center gap-4 py-3 px-5 hover:bg-secondary-100 transition-colors rounded-lg"
          >
            <Users className="h-6 w-6 text-secondary-600" />
            <span>Rentals</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/utility"
            className="flex items-center gap-4 py-3 px-5 hover:bg-secondary-100 transition-colors rounded-lg"
          >
            <Wrench className="h-6 w-6 text-secondary-600" />
            <span>Utility Management</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/analytics"
            className="flex items-center gap-4 py-3 px-5 hover:bg-secondary-100 transition-colors rounded-lg"
          >
            <BarChart className="h-6 w-6 text-secondary-600" />
            <span>Analytics</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/settings"
            className="flex items-center gap-4 py-3 px-5 hover:bg-secondary-100 transition-colors rounded-lg"
          >
            <Settings className="h-6 w-6 text-secondary-600" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
