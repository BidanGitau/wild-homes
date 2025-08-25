import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        quality={10}
        placeholder="blur"
        className=""
        alt="Professional workspace background"
      />

      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-7xl text-white mb-10 tracking-tight font-normal">
          Welcome to LetLinker
        </h1>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Professional house rental management solution for property owners and
          tenants
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/management-login"
            className="bg-blue-600 px-8 py-6 text-white text-lg font-semibold hover:bg-blue-700 transition-all min-w-[200px] rounded-lg shadow-md"
          >
            Management Login
          </Link>
          <Link
            href="/tenant-login"
            className="bg-secondary-800 px-8 py-6 text-white text-lg font-semibold hover:bg-secondary-700 transition-all border border-secondary-600 min-w-[200px] rounded-lg shadow-md"
          >
            Tenant Login
          </Link>
        </div>
      </div>
    </main>
  );
}
