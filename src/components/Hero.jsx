import Image from "next/image";
import Link from "next/link";
import bannerimg from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="relative bg-base-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 animate__animated animate__fadeInLeft">
            <div className="inline-block px-4 py-1.5 mb-2 text-sm font-semibold tracking-wide text-primary uppercase bg-primary/10 rounded-full">
              Eid-ul-Adha 2026 Collection
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-base-content">
              Find Your Perfect <span className="text-primary">Qurbani</span>{" "}
              Sacrifice
            </h1>
            <p className="text-lg text-base-content/70 max-w-lg mx-auto lg:mx-0">
              Select from the healthiest cows, goats, and camels. Verified
              sellers, hassle-free delivery, and Shariah-compliant sourcing.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/animals"
                className="btn btn-primary btn-lg shadow-lg hover:shadow-primary/30"
              >
                Browse Animals
              </Link>
              <Link href="/about" className="btn btn-outline btn-lg">
                How it Works
              </Link>
            </div>

            {/* Quick Stats/Trust Badges */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-base-300">
              <div>
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs uppercase text-base-content/50">
                  Healthy Stock
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">Verified</p>
                <p className="text-xs uppercase text-base-content/50">
                  Sellers
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">Safe</p>
                <p className="text-xs uppercase text-base-content/50">
                  Payments
                </p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
              <Image
                src={bannerimg}
                alt="QurbaniHat Banner - Healthy Livestock"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
