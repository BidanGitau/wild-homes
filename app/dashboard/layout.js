import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: "Dashboard",
};

export default function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <div className="h-screen w-64 shrink-0">
        <SideNavigation />
      </div>
      <div className="flex-1 overflow-y-auto py-10 px-8">{children}</div>
    </div>
  );
}
