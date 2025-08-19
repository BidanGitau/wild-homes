import SideNavigation from "@/app/_components/SideNavigation";

export const metadata = {
  title: "Dashboard",
};

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-8">
      <SideNavigation />
      <div className="py-10">{children}</div>
    </div>
  );
}
