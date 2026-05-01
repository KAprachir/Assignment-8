import AnimalCard from "@/components/AnimalCard";
import { getAnimal } from "@/lib/getanimal";

const AnimalsPage = async () => {
  const animals = await getAnimal();
  console.log(animals);
  return (
    <div>
      <h1>Animals page{animals.length}</h1>
      <div className="grid grid-cols-3 gap-4">
        {animals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
