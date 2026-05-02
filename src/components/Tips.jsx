import { CheckCircle, Info, Star } from "lucide-react";

const Tips = () => {


  const qurbaniTips = [
    {
      title: "Check the Teeth",
      detail:
        "Ensure the animal meets the age requirement (2 years for cows, 1 for goats) by checking their front teeth.",
    },
    {
      title: "Physical Health",
      detail:
        "Look for bright eyes, a shiny coat, and an active temperament. Avoid animals that look lethargic.",
    },
    {
      title: "No Visible Defects",
      detail:
        "The animal should not be limping, blind in one eye, or noticeably thin/ill.",
    },
    {
      title: "Weight Estimation",
      detail:
        "Observe the hump and chest width to estimate the meat yield accurately.",
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Qurbani Tips Section --- */}
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/3">
              <h2 className="text-3xl font-bold mb-4">Expert Qurbani Tips</h2>
              <p className="text-base-content/70 mb-6">
                Make sure your sacrifice is valid and healthy by following our
                expert selection guide.
              </p>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/20">
                <div className="flex items-center gap-3 text-primary font-bold">
                  <Info className="w-5 h-5" />
                  <span>Pro Tip:</span>
                </div>
                <p className="text-sm mt-1">
                  Always buy 7-10 days early to let the animal settle in its new
                  environment.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {qurbaniTips.map((tip, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-base-100 rounded-2xl shadow-sm hover:translate-x-1 transition-transform"
                >
                  <CheckCircle className="w-6 h-6 text-success shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg">{tip.title}</h4>
                    <p className="text-sm text-base-content/60">{tip.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;
