// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-extrabold text-blue-600 tracking-widest">
        404
      </h1>
      <div className="bg-white px-2 text-sm rounded rotate-12 absolute mb-16">
        Page Not Found
      </div>

      <p className="text-gray-500 text-lg mt-4 max-w-md">
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300"
      >
        Go back Home
      </Link>
    </div>
  );
}
