import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getAnimal } from "@/lib/getanimal";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import BookingForm from "@/components/BookingForm";

const AnimalDetailsPage = async ({ params }) => {
  const { id } = await params;
  const animals = await getAnimal();
  const animal = animals.find((a) => a.id.toString() === id);

  if (!animal) return notFound();

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            <Image
              src={animal.image}
              alt={animal.name}
              width={800}
              height={400}
              className="w-full h-100 object-cover"
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

        <div className="lg:col-span-1">
          <BookingForm user={session.user} />
        </div>
      </div>
    </div>
  );
};

export default AnimalDetailsPage;
