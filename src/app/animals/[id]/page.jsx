import { getAnimal } from "@/lib/getanimal";
import Image from "next/image";
import { notFound } from "next/navigation";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animals = await getAnimal();
  const animal = animals.find((a) => a.id.toString() === id);

  if (!animal) return notFound();

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT: Animal Details (2 columns wide on large screens) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src={animal.image}
              alt={animal.name}
              width={800}
              height={400}
              className="w-full h-[400px] object-cover"
            />
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-4xl font-black text-gray-900">
                    {animal.name}
                  </h1>
                  <p className="text-green-600 font-bold text-xl">
                    ৳{animal.price.toLocaleString()}
                  </p>
                </div>
                <span className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm font-medium">
                  {animal.category}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-gray-100">
                <div>
                  <p className="text-gray-400 text-sm">Breed</p>
                  <p className="font-bold">{animal.breed}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Weight</p>
                  <p className="font-bold">{animal.weight} KG</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Age</p>
                  <p className="font-bold">{animal.age} Yrs</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="font-bold">{animal.location}</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="font-bold text-gray-800 mb-2">
                  About this {animal.type}
                </h3>
                <p className="text-gray-600 italic">{animal.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Booking Form (Sticky) */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-green-100 sticky top-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Book this Animal
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="017XXXXXXXX"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Shipping Address
                </label>
                <textarea
                  rows={3}
                  placeholder="House, Road, Area..."
                  className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition"
                  required
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-200 transition-all active:scale-[0.98]"
                >
                  Confirm Booking Request
                </button>
                <p className="text-center text-gray-400 text-xs mt-4">
                  No payment required yet. The seller will call you shortly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
