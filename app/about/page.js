import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-primary-800 font-medium">
          Welcome to LetLinker
        </h1>

        <div className="space-y-8">
          <p>
            LetLinker is a professional house rental management platform
            designed to streamline the process of managing rental properties for
            both property owners and tenants. Our system provides comprehensive
            tools for tracking rent payments, managing maintenance requests, and
            analyzing rental patterns.
          </p>
          <p>
            With LetLinker, property managers can efficiently oversee multiple
            houses while tenants can easily access information about their
            rentals, make payments, and submit requests. Our platform is built
            with modern technology to ensure reliability and security.
          </p>
          <p>
            This is where professional property management meets simplicity.
            It's a place where technology enhances the rental experience for
            everyone involved, making property management less stressful and
            more profitable.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={image1}
          alt="Professional property management dashboard"
          placeholder="blur"
          quality={80}
        />
      </div>

      <div className="relative aspect-square col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Property management team"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-primary-800 font-medium">
          Rental Analytics Dashboard
        </h1>

        <div className="space-y-8">
          <p>
            Our platform provides comprehensive analytics to help property
            managers make data-driven decisions. The charts below show typical
            rent patterns and occupancy rates across different house types.
          </p>

          {/* Chart container */}
          <div className="bg-cream-100 p-6 rounded-lg shadow-sm border border-cream-200">
            <h2 className="text-xl font-semibold mb-4 text-primary-800">
              Monthly Rent Collection Rate
            </h2>
            <div className="h-64 flex items-end justify-between pt-8 border-b border-l border-cream-300">
              {/* Chart bars - simplified representation */}
              <div className="flex flex-col items-center w-12">
                <div
                  className="w-8 bg-cream-500 rounded-t hover:bg-cream-400 transition-all"
                  style={{ height: "80%" }}
                ></div>
                <span className="mt-2 text-sm">Jan</span>
              </div>
              <div className="flex flex-col items-center w-12">
                <div
                  className="w-8 bg-cream-500 rounded-t hover:bg-cream-400 transition-all"
                  style={{ height: "90%" }}
                ></div>
                <span className="mt-2 text-sm">Feb</span>
              </div>
              <div className="flex flex-col items-center w-12">
                <div
                  className="w-8 bg-cream-500 rounded-t hover:bg-cream-400 transition-all"
                  style={{ height: "85%" }}
                ></div>
                <span className="mt-2 text-sm">Mar</span>
              </div>
              <div className="flex flex-col items-center w-12">
                <div
                  className="w-8 bg-cream-500 rounded-t hover:bg-cream-400 transition-all"
                  style={{ height: "95%" }}
                ></div>
                <span className="mt-2 text-sm">Apr</span>
              </div>
              <div className="flex flex-col items-center w-12">
                <div
                  className="w-8 bg-cream-500 rounded-t hover:bg-cream-400 transition-all"
                  style={{ height: "88%" }}
                ></div>
                <span className="mt-2 text-sm">May</span>
              </div>
              <div className="flex flex-col items-center w-12">
                <div
                  className="w-8 bg-cream-500 rounded-t hover:bg-cream-400 transition-all"
                  style={{ height: "92%" }}
                ></div>
                <span className="mt-2 text-sm">Jun</span>
              </div>
            </div>
          </div>

          {/* Table container */}
          <div className="bg-cream-100 p-6 rounded-lg shadow-sm border border-cream-200">
            <h2 className="text-xl font-semibold mb-4 text-primary-800">
              Property Portfolio Overview
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-cream-300">
                    <th className="py-2 px-4 text-left">Property</th>
                    <th className="py-2 px-4 text-left">Type</th>
                    <th className="py-2 px-4 text-left">Occupancy</th>
                    <th className="py-2 px-4 text-left">Monthly Rent</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-cream-300 hover:bg-cream-200">
                    <td className="py-2 px-4">Downtown Apartment</td>
                    <td className="py-2 px-4">Apartment</td>
                    <td className="py-2 px-4">95%</td>
                    <td className="py-2 px-4">$2,400</td>
                  </tr>
                  <tr className="border-b border-cream-300 hover:bg-cream-200">
                    <td className="py-2 px-4">Suburban House</td>
                    <td className="py-2 px-4">House</td>
                    <td className="py-2 px-4">87%</td>
                    <td className="py-2 px-4">$3,200</td>
                  </tr>
                  <tr className="border-b border-cream-300 hover:bg-cream-200">
                    <td className="py-2 px-4">Commercial Space</td>
                    <td className="py-2 px-4">Office</td>
                    <td className="py-2 px-4">100%</td>
                    <td className="py-2 px-4">$4,500</td>
                  </tr>
                  <tr className="hover:bg-cream-200">
                    <td className="py-2 px-4">Beachfront Condo</td>
                    <td className="py-2 px-4">Condo</td>
                    <td className="py-2 px-4">78%</td>
                    <td className="py-2 px-4">$3,800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
