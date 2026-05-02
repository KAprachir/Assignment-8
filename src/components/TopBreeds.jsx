import Image from "next/image";

const breeds = [
  {
    name: "Brahman",
    description: "Known for their heat tolerance and resistance to insects.",
    image: "https://i.ibb.co.com/wrxdTz1C/Royal-Brahman-Bull.jpg",
  },
  {
    name: "Black Bengal",
    description: "Famous for high-quality meat and prolific breeding.",
    image: "https://i.ibb.co.com/0jc5bDvQ/Black-Bengal-Goat.jpg",
  },
  {
    name: "Sahiwal",
    description: "One of the best dairy breeds in tropical countries.",
    image: "https://i.ibb.co.com/VYNcbk8X/Sahiwal-Cow.webp",
  },
  {
    name: "Jamunapari",
    description: "Large-sized goats with excellent milk and meat production.",
    image: "https://i.ibb.co.com/qFFK7xW2/White-Goat-Premium.avif",
  },
];

const TopBreeds = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Top Breeds
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most sought-after breeds available in our marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {breeds.map((breed, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={breed.image}
                  alt={breed.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{breed.name}</h3>
                <p className="mt-2 text-sm text-gray-600">{breed.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopBreeds;
