import AnimalCard from "./AnimalCard";
import { getAnimal } from "@/lib/getanimal";

const FeaturedAnimals = async () => {
  const animals = await getAnimal();
  const featured = animals.slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Featured Animals
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Check out our most popular and healthiest livestock handpicked for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/animals"
            className="btn btn-outline btn-primary px-8"
          >
            View All Animals
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnimals;
