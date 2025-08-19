import { TrashIcon } from "@heroicons/react/24/solid";

function DeleteRental({ bookingId }) {
  return (
    <button className="group flex items-center gap-2 uppercase text-xs font-bold text-secondary-700 flex-grow px-3 hover:bg-secondary-200 transition-colors hover:text-secondary-900">
      <TrashIcon className="h-5 w-5 text-secondary-600 group-hover:text-secondary-800 transition-colors" />
      <span className="mt-1">Delete</span>
    </button>
  );
}

export default DeleteRental;
