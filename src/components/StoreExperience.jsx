import React from "react";
import { CheckCircle2, HeartHandshake, Eye, Sparkles, Scale, RefreshCw } from "lucide-react";
import { shopInfo } from "../data/shopInfo";
import { KamalMotif, ChinarLeaf, KashmiriDivider } from "./KashmiriMotifs";

export const StoreExperience = () => {
  const commitments = [
    {
      icon: <Eye className="w-5 h-5 text-maroon-800" />,
      title: "Inspect Before You Buy",
      description: "Feel free to inspect spice grain density, color depth, and intact crowns at our counter before packing.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-spicegreen-700" />,
      title: "Fresh Turnaround & Stock",
      description: "We replenish stock regularly in small batches to preserve natural volatile oils that give spices their aroma.",
    },
    {
      icon: <Scale className="w-5 h-5 text-saffron-600" />,
      title: "Tailored Quantities",
      description: "From 1 gram of rare saffron to custom kilograms for family celebrations, get the precise measure you need.",
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-maroon-800" />,
      title: "Honest Sourcing",
      description: "No hidden adulteration, synthetic food coloring, artificial weight boosters, or chemical bleaching.",
    },
  ];

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-cream-50 relative overflow-hidden border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-maroon-900 text-xs font-semibold uppercase tracking-widest border border-cream-300 mb-3 shadow-xs">
            <KamalMotif className="w-4 h-4 text-maroon-800" />
            Our Philosophy
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-maroon-900">
            About Prem Kamal Spices
          </h2>

          <KashmiriDivider className="my-3" />

          <p className="font-serif italic text-lg sm:text-xl text-saffron-700 font-medium">
            “{shopInfo.tagline}”
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Story Text */}
          <div className="lg:col-span-7 space-y-6 text-charcoal-700 leading-relaxed font-normal">
            <p className="text-base sm:text-lg">
              At <strong className="text-maroon-900 font-semibold">Prem Kamal Spices</strong>, located at Shop No. 53, Palam Extension in Dwarka Sector 7, our dedication begins with a simple truth: <span className="italic font-serif text-maroon-800">great Indian cooking starts with honest, uncompromised ingredients</span>.
            </p>

            <p className="text-sm sm:text-base">
              Over the years, mass production in commercial spices has frequently meant stale powders, harsh chemical preservatives, and lost aromas. We established our shop to bring back the timeless Indian tradition of selecting plump whole pods, deep fragrant roots, and cold-milled powders that retain their natural essential oils.
            </p>

            <p className="text-sm sm:text-base">
              Our specialty reaches deep into the Kashmir Valley — bringing genuine Pampore Mongra saffron stigmas, naturally dried snow-white walnut kernels, aromatic whole kahwa infusions, and slow-dried red chillies directly to Delhi homes.
            </p>

            {/* In-Store Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {commitments.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-cream-300 shadow-xs flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-cream-100 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-maroon-900">
                      {item.title}
                    </h4>
                    <p className="text-xs text-charcoal-600 mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase / Experience Card */}
          <div className="lg:col-span-5">
            <div className="bg-maroon-900 rounded-2xl p-6 sm:p-8 text-cream-100 border border-saffron-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <ChinarLeaf className="w-56 h-56 text-saffron-400" />
              </div>

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between border-b border-maroon-800 pb-4">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-saffron-400 font-semibold block">
                      Shop Counter Experience
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-cream-50">
                      Dwarka Sector 7 Store
                    </h3>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-maroon-800 flex items-center justify-center text-saffron-400 border border-saffron-500/30">
                    <KamalMotif className="w-6 h-6 text-saffron-400" />
                  </span>
                </div>

                <div className="space-y-3.5 text-xs text-cream-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-cream-100 font-semibold">Address:</strong> Shop No. 53, Palam Extension, Dwarka Sector 7, Delhi-110077
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-cream-100 font-semibold">Direct Sourcing:</strong> Whole spices, Kashmiri specialties, and selected dry fruits
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-cream-100 font-semibold">Timings:</strong> 10:00 AM – 9:00 PM (Open all 7 days)
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-saffron-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-cream-100 font-semibold">Phone Inquiries:</strong> 8700628987 / rajdeepjain1976@gmail.com
                    </span>
                  </div>
                </div>

                <div className="pt-2 border-t border-maroon-800">
                  <p className="text-[11px] italic text-saffron-300">
                    "Every pinch tells a story of genuine soil, careful harvest, and unadulterated freshness."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
