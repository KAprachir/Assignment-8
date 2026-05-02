import { ShieldCheck, Truck, HeartPulse, BadgeCheck } from "lucide-react";

const features = [
  {
    title: "Health Verified",
    description: "Every animal undergoes a rigorous health check by expert veterinarians.",
    icon: HeartPulse,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Secure Payments",
    description: "Your transactions are protected with industry-standard encryption.",
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Hassle-free Delivery",
    description: "Safe and timely transport of your animal directly to your doorstep.",
    icon: Truck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Certified Sellers",
    description: "We only partner with trusted farms and verified individual sellers.",
    icon: BadgeCheck,
    color: "bg-purple-100 text-purple-600",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose QurbaniHat?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing the best service for your religious sacrifice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.color} mb-6 transition-transform group-hover:scale-110 duration-300`}
              >
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
