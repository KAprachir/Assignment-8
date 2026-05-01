import AnimalList from "@/components/AnimalList";
import { getAnimal } from "@/lib/getanimal";

const AnimalsPage = async () => {
  const animals = await getAnimal();
  console.log(animals);
  return (
    <div className="max-w-7xl mx-auto">
      <AnimalList initialAnimals={animals} />
    </div>
  );
};

export default AnimalsPage;
