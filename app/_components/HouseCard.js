import { Users } from "lucide-react";

function HouseCard({ property }) {
  const { id, name, maxCapacity, regularPrice, discount, image, type } =
    property;

  return (
    <div className="flex border-secondary-300 border rounded-lg shadow-sm">
      <img
        src={image}
        alt={`House ${name}`}
        className="flex-1 border-r border-secondary-300 rounded-l-lg"
      />

      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-white rounded-r-lg">
          <h3 className="text-secondary-900 font-semibold text-2xl mb-1">
            House {name}
          </h3>
          {type && (
            <p className="text-sm text-secondary-600 mb-2 capitalize">{type}</p>
          )}

          <div className="flex gap-3 items-center mb-2">
            <Users className="h-5 w-5 text-secondary-600" />
            <p className="text-lg text-secondary-700">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  KSh{regularPrice - discount}
                </span>
                <span className="line-through font-semibold text-secondary-600">
                  KSh{regularPrice}
                </span>
              </>
            ) : (
              <span className="text-3xl font-[350]">KSh{regularPrice}</span>
            )}
            <span className="text-secondary-700">/ month</span>
          </p>
        </div>

        <div className="bg-white border-t border-t-secondary-200 text-right rounded-b-lg">
          <a
            href={`/properties/${id}`}
            className="border-l border-secondary-200 py-4 px-6 inline-block hover:bg-secondary-100 transition-all hover:text-secondary-900 rounded-br-lg"
          >
            Details & rental info &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default HouseCard;
