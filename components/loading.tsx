import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className="fixed left-0 top-0 text-white w-full min-h-screen flex justify-center items-center bg-black/40 z-40 duration-200">
      <FaSpinner className="animate-spin repeat-infinite w-20 h-20" />
    </div>
  );
}
