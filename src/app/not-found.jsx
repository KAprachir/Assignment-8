import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-base-100 text-center px-6">
      <div className="relative animate__animated animate__bounceIn">
        <h1 className="text-[12rem] font-black text-primary/10 select-none">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="text-4xl font-black text-gray-900">Oops! Lost?</h2>
        </div>
      </div>

      <p className="text-gray-500 text-xl mt-4 max-w-md font-medium">
        The animal you're looking for might have already been booked or the page
        is missing.
      </p>

      <Link
        href="/"
        className="mt-10 btn btn-primary btn-lg gap-2 shadow-xl shadow-primary/20 rounded-2xl"
      >
        <Home size={20} />
        Return to Home
      </Link>
    </div>
  );
}
