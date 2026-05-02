import Hero from "@/components/Hero";
import Tips from "@/components/Tips";
import FeaturedAnimals from "@/components/FeaturedAnimals";
import TopBreeds from "@/components/TopBreeds";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <FeaturedAnimals />
      <Tips />
      <TopBreeds />
      <WhyChooseUs />
    </div>
  );
}
